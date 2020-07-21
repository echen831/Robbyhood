class Api::WatchListItemsController < ApplicationController

    def index
        @watch_list_items = WatchListItem.where(user_id: current_user.id)
    end
    
    def create
        @watch_list_item = WatchListItem.new 
        @stock = Stock.find_by(symbol: params[:data][:symbol])
        @watch_list_item.user_id = current_user.id
        @watch_list_item.stock_id = @stock.id

        if @watch_list_item.save
            render :show, status: 200
        else 
            render json: @watch_list_item.errors.full_messages, status: 422
        end
    end

    def destroy
        @watch_list_item = WatchListItem.find(params[:id])
        @watch_list_item.destroy
    end

    private 

    def wl_item_params
        params.require(:watch_list_item).permit(:symbol)
    end

end
