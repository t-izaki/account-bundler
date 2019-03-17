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

class TaskSerializer < ActiveModel::Serializer
  attributes :id, :action, :status, :system_id, :system_name, :system_url, :system_user_id, :system_user_name, :system_user_email, :created_at, :closed_at, :reject_reason

  belongs_to :assignee, class_name: 'Admin', foreign_key: 'assignee_id'
  belongs_to :author, class_name: 'Admin', foreign_key: 'author_id'

  def action
    object.human_attribute_enum(:action)
  end

  def status
    object.human_attribute_enum(:status)
  end

  def system_id
    object.target_system_id
  end

  def system_user_id
    object.target_system_user_id
  end

  def system_name
    object.target_system&.name || '[DELETED]'
  end

  def system_url
    object.target_system&.url || '[DELETED]'
  end

  def system_user_name
    object.target_system_user&.name || '[DELETED]'
  end

  def system_user_email
    object.target_system_user&.email || '[DELETED]'
  end

  def created_at
    object.created_at.strftime('%Y-%m-%d %H:%M:%S')
  end

  def closed_at
    object.closed_at&.strftime('%Y-%m-%d %H:%M:%S')
  end
end
