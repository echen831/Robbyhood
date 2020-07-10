class WatchListItem < ApplicationRecord

    validate :watch_list_id, uniqueness: {scope: [:stock_id]}

    belongs_to :watch_list,
        foreign_key: :watch_list_id,
        class_name: :WatchList

end
