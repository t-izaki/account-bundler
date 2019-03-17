class CreateTasks < ActiveRecord::Migration[5.1]
  def change
    create_table :tasks do |t|
      t.integer :action, null: false
      t.references :target_system_user, foreign_key: { to_table: :system_users }
      t.references :target_system, foreign_key: { to_table: :systems }
      t.integer :status, null: false
      t.datetime :completed_at
      t.references :author, foreign_key: { to_table: :admins }
      t.references :assignee, foreign_key: { to_table: :admins }

      t.timestamps
    end
  end
end
