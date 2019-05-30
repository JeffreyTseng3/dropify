 def create
    @user = User.find_by_credentials(
      debugger
      # keyinginto info to return an email or username
      params[:user][:info],
      params[:user][:password]
    )

    if @user
      # render is the return of the api request
      login!(@user)
      render "api/users/show"
    else
      render json: ["Invalid username/password combination"], status: 401
    end
  end

  def destroy
    @user = current_user
    if @user
      logout!
      render "api/users/show"
    else
      render json: ["No one is signed in"], status: 404
    end
  end