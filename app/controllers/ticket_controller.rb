class TicketController < ApplicationController

  before_filter :user_logged_in?
  before_filter :valid_ticket_params?, only: [:create]

  def create
    ticket = Ticket.new(name: create_params[:name], description: create_params[:description])
    ticket.ticket_type = Ticket::VALID_TYPES[create_params[:type].to_sym]
    ticket.current_status = Ticket::REQUEST_SUBMITTED
    ticket.user = current_user

    if ticket.save
      render json: { status: true, message: 'Success' }
    else
      render json: { status: false, message: 'Error occured' }, status: 400
    end
  end

  private


  def create_params
    params.permit(:name, :description, :type)
  end

  def valid_ticket_params?
    unless Ticket::VALID_TYPES.keys.include?(params[:type].try(:to_sym))
      render json: { status: false, message: 'Not a valid type' }, status: 400
      return
    end
    if params[:name].blank?
      render json: { status: false, message: 'Name empty' }, status: 400
      return
    end
  end

  def user_logged_in?
    unless user_signed_in?
      render json: { status: false, message: 'Not logged in' }, status: 403
    end
  end

end
