class Api::WatchListItemsController < ApplicationController
    
    def create
        @watch_list_item = WatchListItem.new
        

    end

    def destroy
    end


end
