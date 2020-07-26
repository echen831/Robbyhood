import React from 'react';

class BuySellStock extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            num_shares: '',
            transactions_type: 'buy',
            review: false,
        }

    }

    // componentDidUpdate(prevProps) {
    //     if (prevProps.transactions !== this.props.transactions) {
    //         this.props.fetchUser(this.props.currentUser.id)
    //     }
    // }

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

    checkNum(num) {
        if (num[0] === '0') {
            return false
        }

        if (num.length > 6) {
            return false
        }

        return true
    }

    findNumShares(stocks, symbol, ids) {

        let nums_shares = '0'

        for(let i = 0; i < stocks.length; i ++) {
            let stock = stocks[i]
            if (stock.symbol === symbol && ids[symbol]) {
                return ids[symbol]
            }
        }

        return nums_shares 
    };

    findWatchListItem(items, symbol) {

        for(let key in items) {
            if (key === symbol) {
                return items[key][1]
            }
        }
        return false 
    };

    outsideClick(e) {
        let modal = document.getElementById("buy-sell-review-container");
        if (e.target === modal) {
            this.setState({ review: false })
        }   
    }


    render () {
        let { stock, stocks, name, symbol, currentUser, addWatchListItem, deleteWatchListItem } = this.props
        let { num_shares, transactions_type, review } = this.state
        let originalState = {
            num_shares: '',
            transactions_type: 'buy',
            review: false,
        }

        if (!stock || !stock[stock.length-1]) return null

        let transaction = {
            num_shares: this.state.num_shares,
            price: this.showAmount(stock[stock.length - 1].high),
            symbol: symbol,
            transactions_type: this.state.transactions_type
        }

        let ownShares = this.findNumShares(Object.values(stocks), symbol, currentUser.stocks_owned)
        let notEnoughBP = (transactions_type === 'buy' && ((stock[stock.length - 1].high * this.state.num_shares) > currentUser.buying_power))
        let notEnoughShares = (transactions_type === 'sell' && this.state.num_shares > ownShares)
        let watchlistId = this.findWatchListItem(currentUser.wl_items, symbol)

        let estCost = this.showAmount(stock[stock.length - 1].high * this.state.num_shares)
        
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
                    <div className='buy-sell-review-container'
                        id={!review ? 'display-none' : 'buy-sell-review-container'}
                        onClick={(e) => {this.outsideClick(e)}} 
                        >
                        <div className='bsr-container'>
                            <p className='bsr-msg'>{this.checkNum(num_shares.toString()) ? `Are you sure you want to ${transactions_type} ${num_shares} shares of ${name}?` : `Invalid Amount`}</p>
                            <div className='bs-review-btn'>
                                <button
                                    disabled={this.checkNum(num_shares.toString()) ? false : true}
                                    onClick={() => { this.props.handleTransaction(transaction); this.setState(originalState) }}>{this.state.transactions_type.toUpperCase()}</button>
                                <button onClick={() => { this.setState({ review: !review }); this.setState(originalState) }}>Edit</button>
                            </div>
                        </div>
                    </div>
                    <div className='buy-sell-info-container'>
                        <div className='shares-container'>
                            <p>Shares</p>
                            <input type="number"
                                   placeholder='0'
                                   value={num_shares}
                                   maxLength='5'
                                   onChange={(e)=> this.setState({num_shares: e.currentTarget.value})}/>
                        </div>
                        <div className='mp-container'>
                            <p>Market Price</p> 
                            <p>${this.showAmount(stock[stock.length - 1].high)}</p>
                        </div>
                        <div className='cost-credit-container'> 
                            <p>{transactions_type === 'buy' ? 'Estimated Cost: ' : 'Estimated Credit: '}</p>
                            <p className='est-cost-amt'
                               id={notEnoughBP || notEnoughShares ? 'display-none' : ''}
                            >{estCost.length < 10 ? `$${estCost}` : `Too Large`}</p>
                        </div>
                        <div className='review-order-btn-container'
                            id={review ? 'display-none' : ''}>
                            <button
                                disabled={!num_shares || notEnoughBP || notEnoughShares || !this.checkNum(num_shares.toString()) ? true : false} 
                                onClick={() => this.setState({review: !review})}>Review Order</button>
                        </div>
                        <div className='buy-sell-img-container'
                            id={notEnoughShares || notEnoughBP ||review ? 'display-none' : ''}>
                            <img src="https://i.pinimg.com/originals/63/89/fa/6389fa22ed7653c40570c98b03764afc.gif" alt=""/>
                        </div>

                        <div className='bs-error-container'
                            id={!notEnoughShares ? 'display-none' : ''}>
                            <p>Not Enough Shares</p>
                        </div>
                        <div className='bs-error-container'
                            id={!notEnoughBP ? 'display-none' : ''}>
                            <p>Not Enough Buying Power</p>
                        </div>
                    </div>

                    <div className='buy-sell-bottom'>
                        <div className='transaction-info-container'>
                            <div id={transactions_type === 'sell' ? 'display-none' : ''}>Buying Power Available: ${this.showAmount(currentUser.buying_power)}</div>
                            <div id={transactions_type === 'buy' ? 'display-none' : ''}>
                                <p>{ownShares} {" "} {ownShares > 1 ? 'Shares Available' : 'Share Available'}</p>
                            </div>
                        </div>

                        <div className='add-remove-wl-container'>
                            <button onClick={ !watchlistId ? 
                                () => addWatchListItem({symbol: symbol}) :
                                () => deleteWatchListItem(watchlistId)
                            }> {!watchlistId ? 'Add to Watch List' : 'Remove from Watch List'}</button>
                        </div>
                    </div>
            
                </div>
            </div>
        )
    }
}

export default BuySellStock