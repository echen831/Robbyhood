class Stock < ApplicationRecord
    validates :name, :symbol, presence: true
    validates :symbol, uniqueness: true

    belongs_to :exchange,
        foreign_key: :exchange_id,
        class_name: :Exchange

    has_many :transactions,
        foreign_key: :stock_id,
        class_name: :Transaction
end
