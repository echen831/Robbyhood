import React from 'react';

class BuySellStock extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            num_shares: ''
        }

    }

    calcMarketPrice(stock) {
        if (!stock) return null
        let price = stock.toString()
        let priceArr = price.split('.')
        let dollar = priceArr[0]
        let decimal = priceArr[1]

        if (!decimal || !decimal.length) {
            decimal === '00'
        } else if (decimal.length === 1) {
            decimal += '0'
        } else if (decimal.length > 2) {
            decimal = decimal.slice(0, 2)
        }

        return dollar + '.' + decimal
    }

    findNumShares(stocks, symbol, ids) {

        let nums_shares = '0'

        for(let i = 0; i < stocks.length; i ++) {
            let stock = stocks[i]
            if (stock.symbol === symbol && ids[i+1]) {
                return ids[i+1]
            }
        }

        return nums_shares 
    }

    render () {
        let { stock, stocks, name, symbol, currentUser, makeTransaction } = this.props
        let transactionBuy = {
            num_shares: this.state.num_shares,
            price: this.calcMarketPrice(stock[stock.length - 1].high),
            symbol: symbol,
            transactions_type: 'buy'
        }

        let transactionSell = {
            num_shares: this.state.num_shares,
            price: this.calcMarketPrice(stock[stock.length - 1].high),
            symbol: symbol,
            transactions_type: 'sell'
        }
        
        if (!stock || !stock.length) return null
        return (
            <div>
                <div className='stock-bar'>
                    <h1 className='stock-bar-header'>{`Buy ${name.toUpperCase()}`}</h1>
                    <div>Buying Power Available: {currentUser.buying_power}</div>
                    <div>{`Owned Shares: ${this.findNumShares(Object.values(stocks), symbol, currentUser.stocks_owned)}`}</div>

                    <div>Shares <input type="number" onChange={(e)=> this.setState({num_shares: e.currentTarget.value})}/>
                    
                    </div>
                    <div>Market Price  {this.calcMarketPrice(stock[stock.length - 1].high)}</div>
                    <div>Estimated Cost: {this.calcMarketPrice(stock[stock.length - 1].high) * this.state.num_shares}</div>
                    <button onClick={()=> makeTransaction(transactionBuy)}>Buy</button>
                    <button onClick={() => makeTransaction(transactionSell)}>Sell</button>
                </div>
            </div>
        )
    }
}

export default BuySellStock