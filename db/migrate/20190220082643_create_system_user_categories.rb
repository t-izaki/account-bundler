class CreateSystemUserCategories < ActiveRecord::Migration[5.1]
  def change
    create_table :system_user_categories do |t|
      t.string :name, null: false

      t.timestamps
    end
    add_reference :system_users, :system_user_category, foreign_key: true
  end
end
