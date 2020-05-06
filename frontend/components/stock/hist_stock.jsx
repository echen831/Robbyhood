import React from 'react';
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip } from 'recharts';

class HistStock extends React.Component {
    constructor(props) {
        super(props)

        this.filterData = this.filterData.bind(this)
        this.setFlux = this.setFlux.bind(this)
        this.setFluxPercent = this.setFluxPercent.bind(this)
    }


    componentDidMount() {
        const symbol = this.props.symbol;
        const range = this.props.range;
        this.props.fetchHistStock(symbol, range)
    }

    componentDidUpdate(prevProps) {
        const { symbol, range} = this.props
        if ((symbol !== prevProps.symbol) || (range !== prevProps.range)) {
            this.props.fetchHistStock(this.props.symbol, this.props.range)
        }
    }

    filterData(data) {
        let res = [];
        for(let i = 0; i < data.length; i ++) {
            if (i % 5 === 0) {
                res.push(data[i])
            }
        }
        return res
    }

    setFlux(num){
        let res = ''
        let arr = num.toString().split('.')
        let int = arr[0];
        let dec = arr[1];

        if (int[0] !== '-') {
            res += "+" + int + "."
        } else {
            res += int + '.'
        }

        if (!dec) {
            res += '00'
        } else if (dec.length === 1) {
            res += '0' + dec
        } else if (dec.length > 2) {
            res += dec.slice(0, 2)
        } else if (dec.length === 2) {
            res += dec
        }

        return res
    }

    setFluxPercent(oldPrice, newPrice) {
        let diff = oldPrice - newPrice
        let per = diff/oldPrice
        let res = per * 100
        return this.setFlux(res) + '%'
    }  


    render () {
        const { range, name, histData } = this.props
        if (!this.props.histData) return null;
        // let data = this.props.histData
        let data;
        range !== '1d' ? data = histData : data = this.filterData(histData)
        let close = data[data.length-1].high
        let open = data[0].high
        return (
            <div>
                <h1>{name}</h1>
                <p id='stockPrice'>${close}</p>
                <p id='changePrice'>{this.setFlux(close-open)}</p>
                <p id='fluxPercent'>{this.setFluxPercent(close,open)}</p>

                <LineChart data={data} 
                            width={500} 
                            height={300} 
                            margin={{ top: 10, right: 0, bottom: 0, left: 0 }}
                            >
                    <Line type="monotone"
                            connectNulls 
                            dataKey="high" 
                            stroke="#8884d8" 
                            dot={false} 
                            />
                    <XAxis dataKey={range === "1d" ? 'label' : 'date'}
                            tick={false} 
                            axisLine={false} 
                            domain={['dataMin, dataMax'] } 
                            />
                    <YAxis domain={['dataMin, dataMax']} 
                            axisLine={false} 
                            tick={false}
                            />
                    <Tooltip cursor={false}
                            position={{y: 0}} 
                            content={<CustomTooltip 
                                        oldPrice = {open}
                                        setFlux = {this.setFlux}
                                        setFluxPercent = {this.setFluxPercent}
                                        date = {range === '1d' ? data[0].date : null}/>}
                            />
                </LineChart>
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
            price.innerText = `$${currPrice}`
            let flux = currPrice - oldPrice
            change.innerText = props.setFlux(flux)
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