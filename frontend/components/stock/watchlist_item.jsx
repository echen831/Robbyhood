import React from 'react';
import { connect } from 'react-redux'
import { fetchOHLC } from '../../actions/stock_actions'
import { Link } from 'react-router-dom'

class WatchListItem extends React.Component {
    constructor(props) {
        super(props)
    }

    componentDidMount() {
        let { fetchOHLC, symbol, idx, currentUser} = this.props
        let numStocks = Object.keys(currentUser.stocks_owned).length
        let delay = numStocks + idx
        setTimeout(() => fetchOHLC(symbol), delay * 200)
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
        } else {
            return null
        }
    }

    setFlux(num) {

        if (!num) return null 

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

        if (!oldPrice || !newPrice) return null 

        let diff = oldPrice - newPrice
        let per = diff / oldPrice
        let res = per * 100
        
        return this.setFlux(res) + '%'
    } 

    render () {
        let { symbol, prices, name } = this.props
        if (!prices || !prices[symbol]) return null

        let high = prices[symbol].high
        let open = prices[symbol].open ? prices[symbol].open.price : null
        return(

            <Link to={`/search/stocks/${symbol}/${name}`}>
                <div className='portfolio-item-container'>
                    <div className='pi-name-shares'>
                        <p id='pi-stock-name'>{symbol.toUpperCase()}</p>
                    </div>
                    <div className='pi-stock-info'>
                        <p>${this.setPrice(high)}</p>
                        <p>{this.setFluxPercent(open, high)}</p>
                    </div>
                </div>
            </Link>
        )
    }
};

const mSTP = (state, ownProps) => ({
    currentUser: state.entities.users[state.session.id],
    prices: state.entities.ohlcs,
    symbol: ownProps.symbol,
    idx: ownProps.idx
})

const mDTP = (dispatch) => ({
    fetchOHLC: (symbol) => dispatch(fetchOHLC(symbol)) 
})

export default connect(mSTP, mDTP)(WatchListItem)

