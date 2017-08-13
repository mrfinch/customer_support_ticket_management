class CreateTableTicketStatus < ActiveRecord::Migration
  def change
    create_table :ticket_statuses do |t|
      t.integer :status
      t.integer :user_id
      t.text :information

      t.timestamps
    end

    add_index :ticket_statuses, :status
    add_index :ticket_statuses, :user_id
  end
end
