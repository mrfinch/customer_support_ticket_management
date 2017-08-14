require 'spec_helper'

describe TicketController, type: :controller do

  let(:user) { create(:r_user) }

  describe '#create' do

    it 'creates a ticket from valid user with valid params' do
      sign_in(user)

      name = 'Website broken'
      post :create, name: name, description: 'It does not work on IE', type: 'bug'

      expect(response.status).to eq 200
      expect(Ticket.last.name).to eq name
    end

  end

end
