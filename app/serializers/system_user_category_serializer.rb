# == Schema Information
#
# Table name: system_user_categories
#
#  id         :bigint(8)        not null, primary key
#  name       :string(255)      not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class SystemUserCategorySerializer < ActiveModel::Serializer
  attributes :id, :name
end
