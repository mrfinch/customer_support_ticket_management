class TicketController < ApplicationController

  before_filter :user_logged_in?
  before_filter :valid_ticket_params?, only: [:create]

  def index
    data = if params[:show_pending] == 'true'
             if current_user.admin
               Ticket.pending
             else
               current_user.pending_tickets
             end
           else
             if current_user.admin
               Ticket.resolved
             else
               current_user.resolved_tickets
             end
           end

    render json: { status: true, message: 'Success', data: Ticket.readable_types(data.order(created_at: :desc).limit(params[:limit].to_i).offset(params[:page].to_i)) }
  end

  def create
    ticket = Ticket.new(name: create_params[:name], description: create_params[:description])
    ticket.ticket_type = Ticket::VALID_TYPES[create_params[:type].to_i]
    ticket.current_status = Ticket::REQUEST_SUBMITTED
    ticket.user = current_user

    if ticket.save
      ticket.add_to_status_list(status: ticket.current_status, user: current_user)
      render json: { status: true, message: 'Success' }
    else
      render json: { status: false, message: 'Error occured' }, status: 400
    end
  end

  def update
    ticket = Ticket.find_by_id(update_params[:id])

    if ticket.blank?
      render json: { status: false, message: 'No ticket exists' }, status: 400
    else
      ticket.current_status = update_params[:current_status].to_i
      ticket.resolve_eta = Time.now + update_params[:resolve_eta].to_i.days
      if ticket.save
        ticket.add_to_status_list(status: ticket.current_status, user: current_user)
        render json: { status: true, message: 'Success' }
      else
        render json: { status: false, message: 'Error occured' }, status: 400
      end
    end
  end

  private


  def create_params
    params.permit(:name, :description, :type)
  end

  def update_params
    params.permit(:id, :current_status, :resolve_eta)
  end

  def valid_ticket_params?
    unless Ticket::VALID_TYPES.include?(params[:type].to_i)
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
