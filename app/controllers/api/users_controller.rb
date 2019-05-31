class Api::UsersController < ApplicationController
    def create

    errors = []
    if params[:user][:username] == "" 
      errors << "username"
    end 

    if params[:user][:email] == "" 
      errors << "email"
    end 

    if params[:user][:password] == ""
      errors << "password"
    end

    if params[:user][:birth_month] == ""
      errors << "birth_month"
    end
      
    if params[:user][:birth_day] == "0"
      errors << "birth_day"
    end

    if params[:user][:birth_year] == "0"
      errors << "birth_year"
    end

    if params[:user][:gender] == ""
      errors << "gender"
    end

 
    if !errors.empty?
      render json: errors, status: 401
      return 
    end


    @user = User.new(user_params)
    
    if @user.save
 
      login!(@user)
      render "api/users/show"
    else
    
      render json: @user.errors.full_messages, status: 422
    end
  end

  private

  def user_params
    params.require(:user).permit(:email, :password, :username,  :birth_month, :birth_day, :birth_year, :gender)
  end
end
