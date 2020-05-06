class Exchange < ApplicationRecord
    validates :name, presence: true

    has_many :stocks,
        foreign_key: :exchange_id,
        class_name: :Stock
end
