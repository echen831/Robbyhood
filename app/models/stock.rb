class Stock < ApplicationRecord
    validates :name, presence: true, uniqueness: true
    validates :symbol, presence: true, uniqueness: true

    has_many :transactions,
        foreign_key: :stock_id,
        class_name: :Transaction
    
    has_many :watch_list_items,
        foreign_key: :stock_id,
        class_name: :WatchListItem
    
    has_many :users, through: :transactions
end
