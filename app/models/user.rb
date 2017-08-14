class User < ActiveRecord::Base
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :trackable, :validatable,
         :confirmable, :lockable

  has_many :tickets, foreign_key: :user_id

  def pending_tickets
    tickets.where(current_status: Ticket::PENDING)
  end

  def resolved_tickets
    tickets.where(current_status: Ticket::RESOLVED)
  end
end
