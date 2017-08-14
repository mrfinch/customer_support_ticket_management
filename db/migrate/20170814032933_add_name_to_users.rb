class AddNameToUsers < ActiveRecord::Migration
  def change
    add_column :users, :name, :string, limit: 191
    add_index :users, :name
  end
end
