class Api::UsersController < ApplicationController

    def show
        @user = User.find(params[:id])

        if @user
            render :show
        else 
            render json: @user.errors.full_messages, status: 422
        end
    end

    def create
        @user = User.new(user_params)
        
        if @user.save
            login!(@user)
            render :show
        else
            render json: @user.errors.full_messages, status: 422
        end
    end

    def update
        @user = User.find(params[:id])
        @user.update(user_params)
    end

    private
    def user_params
        params.require(:user).permit(:email, :password, :username, :buying_power)
    end
end
