class PdfController < ApplicationController

  before_filter :check_user_login?

  def index
    @last_month_tickets = Ticket.within_date_range(Time.now - 1.month, Time.now).valid.includes(:user)
  end

  private

  def check_user_login?
    current_user && current_user.admin
  end

end
