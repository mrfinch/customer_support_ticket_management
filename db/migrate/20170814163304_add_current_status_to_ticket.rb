class AddCurrentStatusToTicket < ActiveRecord::Migration
  def change
    add_column :tickets, :current_status, :integer, null: false
    add_index :tickets, :current_status
  end
end
