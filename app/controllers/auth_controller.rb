class AuthController < ApplicationController

  before_filter :has_valid_signup_params?, only: [:signup]
  before_filter :does_user_exists?, only: [:signup]

  def signup
    user = User.new(signup_params)

    if user.save
      render json: { status: true, message: 'Success' }
    else
      render json: { status: true, message: user.errors.full_messages }, status: 400
    end
  end

  def login
    user = User.find_by_email login_params[:email]

    failed = false
    if user.present?
      if user.valid_password?(login_params[:password])
        # check why it redirects to 401 if not confirmed
        # add remember me option
        sign_in(:user, user)
      else
        failed = true
      end
    else
      failed = true
    end

    if failed
      render json: { status: false, message: 'Email, password mismatch, try again' }, status: 400
    else
      render json: { status: true, message: 'Success' }
    end
  end

  def logout
    if sign_out(current_user)
      render json: { status: true, message: 'Success' }
    else
      render json: { status: false, message: 'Error occured' }, status: 400
    end
  end

  private

  def signup_params
    params.permit(:name, :email, :password)
  end

  def login_params
    params.permit(:email, :password, :remember_me)
  end

  def has_valid_signup_params?
    blank_model = if params[:email].blank?
                    'email'
                  elsif params[:name].blank?
                    'name'
                  elsif params[:password].blank?
                    'password'
                  else
                    nil
                  end

    if blank_model.present?
      render json: { status: false, message: "#{blank_model} is empty" }, status: 400
    end
  end

  def does_user_exists?
    user = User.find_by_email(params[:email])

    if user.present?
      render json: { status: false, message: 'User already exists, try to login' }, status: 400
    end
  end

end
