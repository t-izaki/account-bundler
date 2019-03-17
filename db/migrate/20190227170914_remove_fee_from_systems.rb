class RemoveFeeFromSystems < ActiveRecord::Migration[5.1]
  def change
    change_table :systems, bulk: true do |t|
      t.remove :fee
    end
  end
end
