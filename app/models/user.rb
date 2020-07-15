class User < ApplicationRecord
    validates :email, :username, presence: true, uniqueness: true
    validates :password_digest, presence: true
    validates :password, length: {minimum: 6, allow_nil: true}

    has_many :transactions,
        foreign_key: :user_id,
        class_name: :Transaction
    
    has_one :watch_list,
        foreign_key: :user_id,
        class_name: :WatchList
    
    has_many :stocks, through: :transactions
    
    attr_reader :password

    after_initialize :ensure_session_token!

    def self.find_by_credentials(email, password)
        user = User.find_by(email: email)
        user && user.is_password?(password) ? user : nil
    end

    def password=(password)
        @password = password
        self.password_digest = BCrypt::Password.create(password)
    end

    def is_password?(password)
        BCrypt::Password.new(self.password_digest).is_password?(password)
    end

    def reset_session_token
        self.session_token = SecureRandom.urlsafe_base64
        self.save!
        self.session_token
    end

    def ensure_session_token!
        self.session_token ||= SecureRandom.urlsafe_base64
    end

    def shares_owned(stock_id)
        shares = 0
        transactions.where(stock_id: stock_id).each do |transaction| 
            if transaction.transactions_type == 'buy'
                shares += transaction.num_shares
            else 
                shares -= transaction.num_shares
            end
        end
        shares
    end

    def calculate_buying_power
        buying_power = self.buying_power

        transactions.each do |transaction|
            transaction_amount = transaction.price * transaction.num_shares
            if transaction.transactions_type == 'buy'
                buying_power -= transaction_amount
            else 
                buying_power += transaction_amount
            end
        end

        buying_power
    end

    def stocks_owned
        stocks = {}

        transactions.each do |transaction| 
            if transaction.transactions_type == 'buy' && !stocks[transaction.stock_id]
                stocks[transaction.stock_id] = transaction.num_shares
            elsif transaction.transactions_type == 'buy'
                stocks[transaction.stock_id] += transaction.num_shares
            elsif transaction.transactions_type == 'sell'
                stocks[transaction.stock_id] -= transaction.num_shares
            end
        end

        stocks.select { |k, v| v > 0 }
    end

end
