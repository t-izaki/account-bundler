# == Schema Information
#
# Table name: tasks
#
#  id                    :bigint(8)        not null, primary key
#  action                :integer          not null
#  closed_at             :datetime
#  reject_reason         :text(65535)
#  status                :integer          not null
#  created_at            :datetime         not null
#  updated_at            :datetime         not null
#  assignee_id           :bigint(8)
#  author_id             :bigint(8)
#  target_system_id      :bigint(8)
#  target_system_user_id :bigint(8)
#
# Indexes
#
#  index_tasks_on_assignee_id            (assignee_id)
#  index_tasks_on_author_id              (author_id)
#  index_tasks_on_target_system_id       (target_system_id)
#  index_tasks_on_target_system_user_id  (target_system_user_id)
#
# Foreign Keys
#
#  fk_rails_...  (assignee_id => admins.id)
#  fk_rails_...  (author_id => admins.id)
#  fk_rails_...  (target_system_id => systems.id)
#  fk_rails_...  (target_system_user_id => system_users.id)
#

class Task < ApplicationRecord
  belongs_to :assignee, class_name: 'Admin', foreign_key: 'assignee_id', inverse_of: :assign_tasks
  belongs_to :author, class_name: 'Admin', foreign_key: 'author_id', inverse_of: :author_tasks
  belongs_to :target_system, class_name: 'System', foreign_key: 'target_system_id', inverse_of: :tasks
  belongs_to :target_system_user, class_name: 'SystemUser', foreign_key: 'target_system_user_id', inverse_of: :tasks

  enum action: { create_account: 0, destroy_account: 1 }
  enum status: { in_progress: 0, completed: 1, rejected: 2 }

  validates :action, :status, presence: true

  def self.account_create_request!(system_id:, system_user_id:, assignee_id:, author_id:)
    # admin = Admin.first # 仮の管理者
    Task.create!(
      action: :create_account,
      status: :in_progress,
      author_id: author_id,
      assignee_id: assignee_id,
      target_system_id: system_id,
      target_system_user_id: system_user_id
    )
  end

  def self.account_destroy_request!(system_id:, system_user_id:, assignee_id:, author_id:)
    # admin = Admin.first # 仮の管理者
    Task.create!(
      action: :destroy_account,
      status: :in_progress,
      author_id: author_id,
      assignee_id: assignee_id,
      target_system_id: system_id,
      target_system_user_id: system_user_id
    )
  end

  def complete
    # TODO: 例外処理
    ActiveRecord::Base.transaction do
      task_close!(self)
      case action.to_sym
      when :create_account then Account.create_by_task!(self) # account_create!(self)
      when :destroy_account then Account.destroy_by_task!(self)
      end
    end
    self
  end

  def reject(reason:)
    update(status: :rejected, closed_at: Time.zone.now, reject_reason: reason)
  end

  private

  def task_close(task)
    return false if completed?

    task.update(status: :completed, closed_at: Time.zone.now)
  end

  def task_close!(task)
    task_close(task) || ActiveRecord::RecordInvalid
  end
end
