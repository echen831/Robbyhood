import React from 'react';


class PortfolioItem extends React.Component {
    constructor(props) {
        super(props)
    }

    componentDidMount() {
        let { fetchOneDayStock, symbol } = this.props
        fetchOneDayStock(symbol, '1d')
    }

    findCurrentPrice(stocks, symbol) {
        let price = null
        if (!stocks || !stocks[symbol]) return null

        let stock = stocks[symbol]
        let i = 1

        while (!price) {
            if (stock[stock.length -i].high) {
                price = stock[stock.length - i].high
            } else {
                i += 1
            }
        }

        return price
    }

    render () {

        let { currentUser, symbol, idx, myStocks } = this.props
        if (!myStocks) return null
        return (
            <div className='portfolio-item-container'
                 key={idx}>
                <div className='pi-name-shares'>
                    <p id='pi-stock-name'>{symbol.toUpperCase()}</p>
                    <p id='pi-shares-owned'>
                        {currentUser.stocks_owned[symbol]}
                        {" "} 
                        {currentUser.stocks_owned[symbol] > 1 ? 'Shares' : 'Share'}</p>
                </div>
                <div className='pi-stock-info'>
                    <p>{this.findCurrentPrice(myStocks, symbol)}</p>
                </div>
            </div>
        )
    }
}

export default PortfolioItem