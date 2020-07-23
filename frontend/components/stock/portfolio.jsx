import React from 'react';
import { connect } from 'react-redux'
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip } from 'recharts';

class Portfolio extends React.Component {
    constructor(props) {
        super(props)

        this.filterData = this.filterData.bind(this)
        this.setFlux = this.setFlux.bind(this)
        this.setFluxPercent = this.setFluxPercent.bind(this)
        this.addSymbol = this.addSymbol.bind(this)
        this.setPrice = this.setPrice.bind(this)
    }

    oneDayPortfolio () {

        let { currentUser, oneDayStocks } = this.props
        
        let res = []
        
        for (let symbol in oneDayStocks) {
            let data = oneDayStocks[symbol]
            let open = data[0].high
            let num_owned = currentUser.stocks_owned[symbol]

            for(let i = 0; i < data.length; i ++) {
                let item = data[i]
                

                let hash = {
                    date: '',
                    label: '',
                    open: currentUser.buying_power,
                    high: currentUser.buying_power,
                }

                if (!res[i]) {
                    res[i] = hash
                }

                if (item.high) {
                    
                    res[i].date = item.date
                    res[i].label = item.label
                    res[i].open = (open * num_owned)
                    res[i].high += (item.high * num_owned)
                } else if (!item.high) {
                    res[i].date = item.date
                    res[i].label = item.label
                    res[i].open = (open * num_owned)
                    res[i].high += (open * num_owned)
                }
            }
            
        }
        return res
    }
    filterData(data) {
        let res = [];
        for (let i = 0; i < data.length; i++) {
            if (i % 5 === 0 || i === data.length - 1) {
                res.push(data[i])
            }
        }
        return res
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

    addSymbol(flux) {
        return flux[0] + '$' + flux.slice(1)
    }

    setFluxPercent(oldPrice, newPrice) {
        let diff = oldPrice - newPrice
        let per = diff / oldPrice
        let res = per * 100
        return '(' + this.setFlux(res) + '%)'
    }  


    render () {

        let data = this.filterData(this.oneDayPortfolio())
        if (!data || !data[0]) return null
        let close = data[data.length - 1].high
        let open = data[0].high
        let flux = this.setFlux(close - open)

        
        return (
            <div>
                <div className='stock-info-container'>
                    <p id='stockPrice'>${this.setPrice(close)}</p>
                    <div className='flux'>
                        <p id='changePrice'>{this.addSymbol(flux)}</p>
                        <p id='fluxPercent'>{this.setFluxPercent(close, open)}</p>
                    </div>
                </div>
                <LineChart data={data}
                    width={500}
                    height={300}
                    className='chart'
                // margin={{ top: 10, right: 0, bottom: 0, left: 0 }}
                >
                    <Line type="monotone"
                        connectNulls
                        dataKey="high"
                        strokeWidth={2}
                        stroke="#5ae6b0"
                        dot={false}
                    />
                    <XAxis dataKey={'label'}
                        tick={false}
                        axisLine={false}
                        domain={['dataMin, dataMax']}
                    />
                    <YAxis domain={['dataMin, dataMax']}
                        axisLine={false}
                        tick={false}
                    />
                    <Tooltip cursor={true}
                        position={{ y: -20 }}
                        content={<CustomTooltip
                            oldPrice={open}
                            setPrice={this.setPrice}
                            setFlux={this.setFlux}
                            addSymbol={this.addSymbol}
                            setFluxPercent={this.setFluxPercent}
                            date={data[0].date} />}
                    />
                </LineChart>

            </div>
        )
    }
};

const CustomTooltip = (props) => {
    let oldPrice = props.oldPrice
    if (props.active) {
        const price = document.getElementById('stockPrice')
        const change = document.getElementById('changePrice')
        const update = document.getElementById('fluxPercent')
        if (props.payload[0] && props.payload[0].payload) {
            let currPrice = (props.payload[0].payload.high)
            let flux = props.setFlux(currPrice - oldPrice)
            price.innerText = `$${props.setPrice(currPrice)}`
            change.innerText = props.addSymbol(flux)
            update.innerText = props.setFluxPercent(currPrice, oldPrice)
        }
        return (
            <div >
                {/* <p>{props.date}</p> */}
                <p>{props.label}</p>
            </div>
        );
    }

    return null;
};

const mSTP = (state) => ({
    currentUser: state.entities.users[state.session.id],
    oneDayStocks: state.entities.portfolio.stocks
    
});

const mDTP = (dispatch) => ({

});

export default connect(mSTP, mDTP)(Portfolio)


