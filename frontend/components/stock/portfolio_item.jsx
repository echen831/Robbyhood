import React from 'react';
import { Link } from 'react-router-dom'
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip, ReferenceLine } from 'recharts';
import Loader from '../loader/loader'


class PortfolioItem extends React.Component {
    constructor(props) {
        super(props)

    }

    // componentDidMount() {
    //     let { fetchOneDayStock, symbol, idx } = this.props

    //     setTimeout(() => fetchOneDayStock(symbol, '1d'), idx * 100)
    // }

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

    findName(stocks, symbol) {
        for(let i = 0; i < stocks.length; i ++) {
            let stock = stocks[i]
            if (stock.symbol === symbol) {
                return stock.name
            }
        }
    }

    filterData(data) {
        let res = [];
        for (let i = 0; i < data.length; i++) {
            if (i % 10 === 0 || i === data.length - 1) {
                res.push(data[i])
            }
        }
        return res
    }

    findOpen(data) {
        let i = 0
        let res = undefined

        while (!res) {
            if (data[i].high) {
                res = data[i].high
            } else {
                i++
            }
        }
        return res
    }


    render () {

        let { currentUser, symbol, idx, myStocks, stocks } = this.props

        if (!myStocks || !myStocks[symbol]) return null

        let name = this.findName(Object.values(stocks), symbol)
        let currPrice = this.findCurrentPrice(myStocks, symbol)
        let openPrice = this.findOpen(myStocks[symbol])
        let data = this.filterData(myStocks[symbol])
        let flux = ((currPrice - openPrice) / openPrice) * 100

        let stroke;

        if (flux > 0.99) {
            stroke = "#5ae6b0"
        } else if (flux < -0.99) {
            stroke = "#e65a5a"
        } else {
            stroke = "#ffac12"
        }
        
        return (
        <Link to={`/search/stocks/${symbol}/${name}`} key={idx}>
            <div className='portfolio-item-container'>
                <div className='pi-overlay'></div>
                <div className='pi-name-shares'>
                    
                    <p id='pi-stock-name'>{symbol.toUpperCase()}</p>
                    <p id={!currentUser.stocks_owned[symbol] ? 'display-none' : 'pi-shares-owned'}>
                        {currentUser.stocks_owned[symbol]}
                        {" "} 
                        {currentUser.stocks_owned[symbol] > 1 ? 'Shares' : 'Share'}</p>
                </div>
                <div className='pi-stock-chart'>
                    <LineChart data={data}
                            width={150}
                            height={50}
                            className='pi-chart'
                    >
                            <Line type="linear"
                                connectNulls
                                dataKey="high"
                                strokeWidth={1}
                                stroke={stroke}
                                dot={false}
                            />
                            <ReferenceLine y={openPrice} stroke='#d6d6d6' strokeDasharray="1 1"/>
                            {/* <XAxis 
                                // dataKey={range === "1d" ? 'label' : 'date'}
                                tick={false}
                                axisLine={false}
                                domain={['dataMin, dataMax']}
                            /> */}
                            <YAxis 
                                domain={['dataMin, dataMax']}
                                axisLine={false}
                                tick={false}
                            />
                    </LineChart>
                </div>
                <div className='pi-stock-info'>
                    <p>${this.setPrice(currPrice)}</p>
                    <p style={{color: stroke}}
                        // id={currPrice - openPrice < 0 ? 'red' : 'green'}
                        >{this.setFluxPercent(currPrice, openPrice)}</p>
                </div>
            </div>
        </Link>
        )
    }
}

export default PortfolioItem