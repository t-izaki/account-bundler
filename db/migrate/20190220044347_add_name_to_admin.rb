class AddNameToAdmin < ActiveRecord::Migration[5.1]
  def change
    add_column :admins, :name, :string, null: false, default: ''
  end
end
