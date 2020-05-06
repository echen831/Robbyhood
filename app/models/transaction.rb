class Transaction < ApplicationRecord
    validates :user_id, :stock_id, :price, :num_shares, :transaction_type, presence: true

    belongs_to :user,
        foreign_key: :user_id,
        class_name: :User

    belongs_to :stock,
        foreign_key: :stock_id,
        class_name: :Stock
end
