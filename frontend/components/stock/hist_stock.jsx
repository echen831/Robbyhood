import React from 'react';
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip } from 'recharts';

class HistStock extends React.Component {
    constructor(props) {
        super(props)

        this.filterData = this.filterData.bind(this)
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


    render () {
        if (!this.props.histData) return null;
        // let data = this.props.histData
        let data;
        this.props.range !== '1d' ? data = this.props.histData : data = this.filterData(this.props.histData)
        let close = data[data.length-1].high
        let open = data[0].high
        return (
            <div>
                <h1>{this.props.name}</h1>
                <p id='stockPrice'>${close}</p>
                <p id='changePrice'>{close-open}</p>

                <LineChart data={data} 
                            width={500} 
                            height={300} 
                            margin={{ top: 10, right: 0, bottom: 0, left: 0 }}
                            >
                    <Line type="monotone"
                            connectNulls 
                            dataKey="high" 
                            stroke="#8884d8" 
                            dot={false} />
                    <XAxis dataKey={this.props.range === "1d" ? 'label' : 'date'}
                            tick={false} 
                            axisLine={false} 
                            domain={['dataMin, dataMax'] } />
                    <YAxis domain={['dataMin, dataMax']} 
                            axisLine={false} 
                            tick={false}/>
                    <Tooltip cursor={false}
                            position={{y: 0}} 
                            content={<CustomTooltip oldPrice = {open} date = {this.props.range === '1d' ? data[0].date : null}/>}/>
                </LineChart>
            </div>
        )
    };
};

const setFlux = (num) => {
    let res = ''
    let arr = num.split('.')
    let int = arr[0];
    let dec = arr[1];

    if (int[0] === '-') {
        
    }
    return res
}

const CustomTooltip = (props) => {
    let oldPrice = props.oldPrice
    if (props.active) {
        const price = document.getElementById('stockPrice')
        const change = document.getElementById('changePrice')
        if (props.payload[0] && props.payload[0].payload) {
            let currPrice = (props.payload[0].payload.high)
            price.innerText = `$${currPrice}`
            let flux = currPrice - oldPrice
            change.innerText = flux
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