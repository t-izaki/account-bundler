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

class Admin < ApplicationRecord
  # Include default devise modules. Others available are:
  # :recoverable, :rememberable, :confirmable, :lockable, :timeoutable, :trackable and :omniauthable
  devise :database_authenticatable, :registerable, :validatable
  include DeviseTokenAuth::Concerns::User

  # TODO: タスクが残っていたらAdminは削除できないようにする(nullifyも不要になる)
  has_many :author_tasks, class_name: 'Task', foreign_key: 'author_id', dependent: :nullify, inverse_of: :author
  has_many :assign_tasks, class_name: 'Task', foreign_key: 'assignee_id', dependent: :nullify, inverse_of: :assignee
end
