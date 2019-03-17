class AddUseEndAtToSystems < ActiveRecord::Migration[5.1]
  def change
    change_table :systems, bulk: true do |t|
      t.date :use_end_at
      t.rename :contracted_at, :use_start_at
    end
  end
end
