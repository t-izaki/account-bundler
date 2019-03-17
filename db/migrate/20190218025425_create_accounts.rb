class CreateAccounts < ActiveRecord::Migration[5.1]
  def change
    create_table :accounts do |t|
      t.references :system, foreign_key: true
      t.references :system_user, foreign_key: true

      t.timestamps
    end
  end
end
