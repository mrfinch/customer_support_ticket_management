require 'spec_helper'

describe AuthController, type: :controller do

  let(:user) { create(:r_user) }

  context '#signup' do

    it 'checks user is created on signup' do
      post :signup, name: 'Saurabh', email: 'sa@gm.co', password: 'temp123'

      expect(response.status).to eq 200
    end

  end

end
