# == Schema Information
#
# Table name: system_users
#
#  id                      :bigint(8)        not null, primary key
#  archived_at             :datetime
#  email                   :text(65535)      not null
#  joined_at               :date
#  name                    :string(255)      not null
#  retired_at              :date
#  created_at              :datetime         not null
#  updated_at              :datetime         not null
#  system_user_category_id :bigint(8)
#
# Indexes
#
#  index_system_users_on_system_user_category_id  (system_user_category_id)
#
# Foreign Keys
#
#  fk_rails_...  (system_user_category_id => system_user_categories.id)
#

class SystemUser < ApplicationRecord
  has_many :accounts, dependent: :delete_all
  has_many :tasks, foreign_key: 'target_system_user_id', dependent: :nullify, inverse_of: :target_system_user
  belongs_to :system_user_category, optional: true

  validates :name, :email, presence: true

  # scope :active, lambda{
  #   where(archived_at: nil)
  # }
end
