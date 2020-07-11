class Api::WatchListItemsController < ApplicationController
    
    def create
        @watch_list_item = WatchListItem.new


    end

    def destroy
        @watch_list_item = WatchListItem.find(params[:id])
        @watch_list_item.destroy
    end


end
