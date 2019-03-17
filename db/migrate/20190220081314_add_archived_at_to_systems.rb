class AddArchivedAtToSystems < ActiveRecord::Migration[5.1]
  def change
    add_column :systems, :archived_at, :datetime
  end
end
