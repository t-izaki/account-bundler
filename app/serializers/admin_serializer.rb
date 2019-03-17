# == Schema Information
#
# Table name: admins
#
#  id                 :bigint(8)        not null, primary key
#  email              :string(255)      default(""), not null
#  encrypted_password :string(255)      default(""), not null
#  name               :string(255)      default(""), not null
#  provider           :string(255)      default("email"), not null
#  tokens             :text(65535)
#  uid                :string(255)      default(""), not null
#  created_at         :datetime         not null
#  updated_at         :datetime         not null
#
# Indexes
#
#  index_admins_on_email             (email) UNIQUE
#  index_admins_on_uid_and_provider  (uid,provider) UNIQUE
#

class AdminSerializer < ActiveModel::Serializer
  attributes :id, :email, :name
end
