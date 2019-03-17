# == Schema Information
#
# Table name: systems
#
#  id                 :bigint(8)        not null, primary key
#  archived_at        :datetime
#  name               :string(255)      not null
#  remark             :text(65535)
#  url                :text(65535)      not null
#  use_end_at         :date
#  use_start_at       :date
#  created_at         :datetime         not null
#  updated_at         :datetime         not null
#  admin_id           :bigint(8)
#  system_category_id :bigint(8)
#
# Indexes
#
#  index_systems_on_admin_id            (admin_id)
#  index_systems_on_name                (name) UNIQUE
#  index_systems_on_system_category_id  (system_category_id)
#
# Foreign Keys
#
#  fk_rails_...  (admin_id => admins.id)
#  fk_rails_...  (system_category_id => system_categories.id)
#

class System < ApplicationRecord
  belongs_to :admin
  has_many :accounts, dependent: :delete_all
  has_many :system_users, through: :accounts
  has_many :tasks, foreign_key: 'target_system_id', dependent: :nullify, inverse_of: :target_system

  validates :name, :url, presence: true
  validates :name, uniqueness: true

  # scope :active, lambda{
  #   where(archived_at: nil)
  # }
end
