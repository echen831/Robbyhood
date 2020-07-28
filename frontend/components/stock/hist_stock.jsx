import React from 'react';
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip } from 'recharts';

class HistStock extends React.Component {
    constructor(props) {
        super(props)

        this.filterData = this.filterData.bind(this)
        this.setFlux = this.setFlux.bind(this)
        this.setFluxPercent = this.setFluxPercent.bind(this)
        this.addSymbol = this.addSymbol.bind(this)
        this.setPrice = this.setPrice.bind(this)
    }


    componentDidMount() {
        const symbol = this.props.symbol;
        const range = this.props.range;

        this.props.fetchHistStock(symbol, range)
    }

    componentDidUpdate(prevProps) {
        const { symbol, range} = this.props
        if ((symbol !== prevProps.symbol) || (range !== prevProps.range)) {
            this.props.fetchHistStock(symbol, range)
        }
    }

    filterData(data) {
        let res = [];
        for(let i = 0; i < data.length; i ++) {
            if (i % 5 === 0 || i === data.length-1) {
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
                res = res.slice(0,2)
            }
    
            return arr[0] + '.' + res
        }
    }



    setFlux(num){
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
        let per = diff/oldPrice
        let res = per * 100
        return '(' + this.setFlux(res) + '%)'
    }  


    render () {
        const { range, name, symbol, histData } = this.props
        if (!this.props.histData) return null;

        // let data = this.props.histData
        let data;
        range !== '1d' ? data = histData : data = this.filterData(histData)

        if (!data || !data[0]) return null;
        let close = data[data.length-1].high
        let open = data[0].high
        let flux = this.setFlux(close - open)

        const chart = (
            <div>
                <div className='stock-info-container'>
                    <h1 className='stock-name'>{name ? name : symbol.toUpperCase()}</h1>
                    <p id='stockPrice'>${this.setPrice(close)}</p>
                    <div className='flux'>
                        <p id='changePrice'>{this.addSymbol(flux)}</p>
                        <p id='fluxPercent'>{this.setFluxPercent(close, open)}</p>
                        {/* <p id='fluxInfo'>{range === '1d' ? 'Today' : ''}</p> */}
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
                    <XAxis dataKey={range === "1d" ? 'label' : 'date'}
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
                            date={range === '1d' ? data[0].date : null} />}
                    />
                </LineChart>
            </div>
        )

        const loader = (
            <div className='loader-body'>
                <img className='loader-img' src="https://i.ya-webdesign.com/images/loading-png-gif.gif" alt="" />
            </div>
        )
        
        return (
           <div className='chart-container'>
               {this.props.loading ? loader : chart}
           </div>
        )
    };
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


export default HistStock