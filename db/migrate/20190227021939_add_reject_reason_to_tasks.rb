class AddRejectReasonToTasks < ActiveRecord::Migration[5.1]
  def change
    change_table :tasks, bulk: true do |t|
      t.text :reject_reason
      t.rename :completed_at, :closed_at
    end
  end
end
