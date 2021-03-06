class Api::TransactionsController < ApplicationController

    def index
        @transactions = current_user.transactions.includes(:stock)
    end


    def create
        @transaction = Transaction.new(transaction_params)
        @stock = Stock.find_by(symbol: params[:transaction][:symbol])
        @transaction.stock_id = @stock.id
        @transaction.user_id = current_user.id

        
        transaction_amount = @transaction.price * @transaction.num_shares
        buying_power = current_user.calculate_buying_power
        shares_owned = current_user.shares_owned(@transaction.stock_id)


        if transaction_amount > buying_power && @transaction.transactions_type == 'buy'
            render json: ['Not enough buying power'], status: 401
        elsif @transaction.num_shares <= 0 
            render json: ['Shares must be greater than 0'], status: 422
        elsif @transaction.num_shares > shares_owned && @transaction.transactions_type == 'sell'
            render json: ["Not enough shares"], status: 401
        else 
            if @transaction.save 
                render :show, status: 200
            else 
                render json: @transaction.errors.full_messages, status: 422
            end
        end
    end

    def update
        @transaction = Transaction.find(params[:id])

        if @transaction.update(transaction_params)
            render 'api/transaction/show', status: 200
        else 
            render json: @transaction.errors.full_messages, status: 422
        end
    end

    def destroy
        @transaction = Transaction.find(params[:id])
        @transaction.destroy
    end

    private

    def transaction_params
        params.require(:transaction).permit(:price, :num_shares, :transactions_type )
    end



end
