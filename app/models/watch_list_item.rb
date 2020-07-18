class WatchListItem < ApplicationRecord

    validates :user_id, uniqueness: {scope: [:stock_id]}

    belongs_to :user,
        foreign_key: :user_id,
        class_name: :User
    
    belongs_to :stock,
        foreign_key: :stock_id,
        class_name: :Stock

end
