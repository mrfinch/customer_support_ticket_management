require 'spec_helper'

describe AuthController, type: :controller do

  let(:user) { create(:r_user) }

  before(:each) do
    request.accept = "application/json"
  end


  describe '#signup' do

    it 'checks user is created on signup' do
      post :signup, name: 'Saurabh', email: 'sa@gm.co', password: 'temp123'

      expect(response.status).to eq 200
    end

  end

  describe '#login' do

    it 'logs in if user enters correct credentials' do
      post :login, email: user.email, password: user.password

      expect(response.status).to eq 200
    end

    it 'does not log in if user enters incorrect credentials' do
      post :login, email: user.email, password: user.password + '1'

      expect(response.status).to eq 400
    end

  end

  describe '#logout' do

    before(:each) do
      sign_in user
    end

    it 'logs out current_user' do
      request.accept = "application/json"
      delete :logout

      expect(response.status).to eq 200
    end

  end

end
