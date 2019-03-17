class AddArchivedAtToSystemUsers < ActiveRecord::Migration[5.1]
  def change
    add_column :system_users, :archived_at, :datetime
  end
end
