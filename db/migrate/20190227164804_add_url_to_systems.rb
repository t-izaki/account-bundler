class AddUrlToSystems < ActiveRecord::Migration[5.1]
  def change
    change_table :systems, bulk: true do |t|
      t.text :url, null: false
    end
  end
end
