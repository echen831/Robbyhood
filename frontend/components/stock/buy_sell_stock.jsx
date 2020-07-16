import React from 'react';

class BuySellStock extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            num_shares: 0,
            transactions_type: 'buy',
            review: false
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
        let { num_shares, transactions_type, review } = this.state
        let transaction = {
            num_shares: this.state.num_shares,
            price: this.showAmount(stock[stock.length - 1].high),
            symbol: symbol,
            transactions_type: this.state.transactions_type
        }

        let ownShares = this.findNumShares(Object.values(stocks), name, currentUser.stocks_owned)

        
        if (!stock || !stock.length) return null


        return (
            <div>
                <div className='stock-bar'>
                    <div className='buy-sell-container'>
                        <p  id='buy-tab'
                            className={transactions_type === 'buy' ? 'bs-selected' : ''}
                            onClick={() => this.setState({transactions_type: 'buy'})}
                            >Buy {symbol.toUpperCase()}</p>
                        <p  id={ ownShares === '0' ? 'display-none' : 'sell-tab'}
                            className={transactions_type === 'sell' ? 'bs-selected' : ''}
                            onClick={() => this.setState({transactions_type: 'sell'})}
                            >Sell {symbol.toUpperCase()}</p>
                    </div>
                    <div className='buy-sell-info-container'>
                        <div className='shares-container'>
                            <p>Shares</p>
                            <input type="number"
                                   placeholder='0' 
                                   onChange={(e)=> this.setState({num_shares: e.currentTarget.value})}/>
                        </div>
                        <div className='mp-container'>
                            <p>Market Price</p> 
                            <p>${this.showAmount(stock[stock.length - 1].high)}</p></div>
                        <div className='cost-credit-container'> 
                            <p>{transactions_type === 'buy' ? 'Estimated Cost: ' : 'Estimated Credit: '}</p>
                            <p>${this.showAmount(stock[stock.length - 1].high  * this.state.num_shares)}</p>
                        </div>
                        <div id={review ? 'display-none' : ''}>
                            <button
                                disabled={num_shares === 0 ? true : false} 
                                onClick={() => this.setState({review: !review})}>Review Order</button>
                        </div>
                        <div className='buy-sell-review-container'
                            id={!review ? 'display-none' : ''}>
                            <p>{`Are you sure you want to ${transactions_type} ${num_shares} shares of ${name}?`}</p>
                            <div className='bs-review-btn'>
                                <button onClick={() => makeTransaction(transaction)}>{this.state.transactions_type}</button>
                                <button onClick={() => this.setState({ review: !review })}>Edit</button>
                            </div>
                        </div>
                    </div>

                    <div className='transaction-info-container'>
                        <div id={transactions_type === 'sell' ? 'display-none' : ''}>Buying Power Available: {this.showAmount(currentUser.buying_power)}</div>
                        <div id={transactions_type === 'buy' ? 'display-none' : ''}>
                             <p>{ownShares} {" "} {ownShares > 1 ? 'Shares Available' : 'Share Available'}</p>
                        </div>
                    </div>
            
                </div>
            </div>
        )
    }
}

export default BuySellStock