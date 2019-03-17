class AddEmailToSystemUsers < ActiveRecord::Migration[5.1]
  def change
    change_table :system_users, bulk: true do |t|
      t.text :email, null: false
    end
  end
end
