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

    setPrice(data) {
        if (data) {

            let arr = data.toString().split('.')
            let res = arr[1]

            if (!res) {
                res = '00'
            } else if (res.length == 1) {
                res += 0
            } else if (res.length > 2) {
                res = res.slice(0, 2)
            }

            return arr[0] + '.' + res
        }
    }

    setFlux(num) {
        let res = ''
        let arr = num.toString().split('.')
        let int = arr[0];
        let dec = arr[1];

        int[0] !== '-' ? res += "+" + int + "." : res += int + '.'


        if (!dec) {
            res += '00'
        } else if (dec.length === 1) {
            res += '0' + dec
        } else if (dec.length === 2) {
            res += dec
        } else if (dec.length > 2) {
            res += dec.slice(0, 2)
        }

        return res
    }

    setFluxPercent(oldPrice, newPrice) {
        let diff = oldPrice - newPrice
        let per = diff / oldPrice
        let res = per * 100
        return this.setFlux(res) + '%'
    } 


    render () {

        let { currentUser, symbol, idx, myStocks } = this.props
        if (!myStocks || !myStocks[symbol]) return null
        let currPrice = this.findCurrentPrice(myStocks, symbol)
        let purchasePrice = currentUser.stock_prices[symbol]
        let openPrice = myStocks[symbol][0].high
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
                    <p>${this.setPrice(currPrice)}</p>
                    <p>{this.setFluxPercent(openPrice, currPrice)}</p>
                </div>
            </div>
        )
    }
}

export default PortfolioItem