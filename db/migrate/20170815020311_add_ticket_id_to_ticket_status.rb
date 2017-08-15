class AddTicketIdToTicketStatus < ActiveRecord::Migration
  def change
    add_column :ticket_statuses, :ticket_id, :integer
    add_index :ticket_statuses, :ticket_id
  end
end
