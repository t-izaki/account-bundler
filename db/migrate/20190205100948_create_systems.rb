class CreateSystems < ActiveRecord::Migration[5.1]
  def change
    create_table :systems do |t|
      t.string :name, null: false
      t.string :fee
      t.date :contracted_at
      t.text :remark
      t.references :admin, foreign_key: true

      t.timestamps
    end

    add_index :systems, :name, unique: true
  end
end
