class Stock < ApplicationRecord
    validates :name, presence: true, uniqueness: true
    validates :symbol, presence: true, uniqueness: true

    has_many :transactions,
        foreign_key: :stock_id,
        class_name: :Transaction
end
