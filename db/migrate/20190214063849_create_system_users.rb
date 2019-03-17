class CreateSystemUsers < ActiveRecord::Migration[5.1]
  def change
    create_table :system_users do |t|
      t.string :name, null: false
      t.date :joined_at
      t.date :retired_at

      t.timestamps
    end
  end
end
