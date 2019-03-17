# == Schema Information
#
# Table name: accounts
#
#  id             :bigint(8)        not null, primary key
#  created_at     :datetime         not null
#  updated_at     :datetime         not null
#  system_id      :bigint(8)
#  system_user_id :bigint(8)
#
# Indexes
#
#  index_accounts_on_system_id       (system_id)
#  index_accounts_on_system_user_id  (system_user_id)
#
# Foreign Keys
#
#  fk_rails_...  (system_id => systems.id)
#  fk_rails_...  (system_user_id => system_users.id)
#

class AccountSerializer < ActiveModel::Serializer
  attributes :id

  belongs_to :system
  belongs_to :system_user
end
