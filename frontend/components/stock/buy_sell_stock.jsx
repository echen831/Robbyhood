import React from 'react';

class BuySellStock extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            num_shares: 0,
            transactions_type: 'buy',
        }

    }

    showAmount(num) {
        if (!num) return '0.00'
        let amount = num.toString()
        let priceArr = amount.split('.')
        let dollar = priceArr[0]
        let decimal = priceArr[1]

        if (!decimal || !decimal.length) {
            decimal = '00'
        } else if (decimal.length === 1) {
            decimal += '0'
        } else if (decimal.length > 2) {
            decimal = decimal.slice(0, 2)
        }

        return dollar + '.' + decimal
    }

    findNumShares(stocks, name, ids) {

        let nums_shares = '0'

        for(let i = 0; i < stocks.length; i ++) {
            let stock = stocks[i]
            if (stock.name === name && ids[name]) {
                return ids[name]
            }
        }

        return nums_shares 
    }


    render () {
        let { stock, stocks, name, symbol, currentUser, makeTransaction } = this.props
        let transaction = {
            num_shares: this.state.num_shares,
            price: this.showAmount(stock[stock.length - 1].high),
            symbol: symbol,
            transactions_type: this.state.transactions_type
        }

        
        if (!stock || !stock.length) return null


        return (
            <div>
                <div className='stock-bar'>
                    <div>
                        <p onClick={() => this.setState({transactions_type: 'buy'})}>Buy</p>
                        <p onClick={() => this.setState({transactions_type: 'sell'})}>Sell</p>
                    </div>
                    <div>
                        <h1 className='stock-bar-header'>{`${this.state.transactions_type.toUpperCase()} ${name.toUpperCase()}`}</h1>
                        <div>Buying Power Available: {this.showAmount(currentUser.buying_power)}</div>
                        <div>{`Owned Shares: ${this.findNumShares(Object.values(stocks), name, currentUser.stocks_owned)}`}</div>

                        <div>Shares <input type="number" onChange={(e)=> this.setState({num_shares: e.currentTarget.value})}/>
                        
                        </div>
                        <div>Market Price  {this.showAmount(stock[stock.length - 1].high)}</div>
                        <div> 
                            {this.state.transactions_type === 'buy' ? 'Estimated Cost: ' : 'Estimated Credit: '}
                            {this.showAmount(stock[stock.length - 1].high  * this.state.num_shares)}
                        </div>
                        <button onClick={()=> makeTransaction(transaction)}>{this.state.transactions_type}</button>
                        <p>{this.state.transactions_made}</p>
                    </div>
            
                </div>
            </div>
        )
    }
}

export default BuySellStock