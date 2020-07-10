class Api::WatchListsController < ApplicationController

    def show
        @watchlist = WatchList.find_by(user_id: current_user.id)

        if @watchlist
            render :show
        else
            render json: @watchlist.errors.full_messages, status: 422
        end
    end

    def create
        @watchlist = WatchList.new
        @watchlist.user_id = current_user.id
        
        @watchlist.save
        render :show
    end

    def destroy
        @watchlist = WatchList.find(params[:id])
        @watchlist.destroy
    end

end
