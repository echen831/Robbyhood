class WatchListItem < ApplicationRecord

    validates :watch_list_id, uniqueness: {scope: [:stock_id]}

    belongs_to :watch_list,
        foreign_key: :watch_list_id,
        class_name: :WatchList
    
    belongs_to :stock,
        foreign_key: :stock_id,
        class_name: :Stock

end
