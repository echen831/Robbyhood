class Api::SessionsController < ApplicationController

    def create
        @user = User.find_by_credentials(
            params[:user][:email],
            params[:user][:password]
        ) 

        if @user
            login!(@user)
            render "api/users/show", status: 200
        else
            render json: ['Invalid Credentials'], status: 401
        end

    end

    def destroy
        if logged_in?
            logout!
            render json: {}, status: 200
        else 
            render json: ['User not found'], status: 404
        end
    end

end
