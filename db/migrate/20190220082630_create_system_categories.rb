class CreateSystemCategories < ActiveRecord::Migration[5.1]
  def change
    create_table :system_categories do |t|
      t.string :name, null: false

      t.timestamps
    end
    add_reference :systems, :system_category, foreign_key: true
  end
end
