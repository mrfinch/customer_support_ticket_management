class CreateTicketTable < ActiveRecord::Migration
  def change
    create_table :tickets do |t|
      t.string :name, limit: 191
      t.text :description
      t.timestamp :resolve_eta
      t.integer :type
      t.integer :user_id, null: false

      t.timestamps
    end

    add_index :tickets, :type
    add_index :tickets, :name
    add_index :tickets, :user_id
    add_index :tickets, :resolve_eta
    add_index :tickets, :updated_at
  end
end
