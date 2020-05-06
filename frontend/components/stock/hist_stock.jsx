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
                <h2 id='stockPrice'>{close}</h2>
                <h2 id='changePrice'>{close-open}</h2>

                <LineChart width={800} 
                            height={400} 
                            data={data} 
                            margin={{ top: 50, right: 20, bottom: 5, left: 100 }}>
                    <Line type="monotone"
                            connectNulls 
                            dataKey="high" 
                            stroke="#8884d8" 
                            dot={false} />
                    <XAxis dataKey={this.props.range !== "1d" ? 'date' : 'label'}
                            tick={false} 
                            axisLine={false} 
                            domain={['dataMin, dataMax'] } />
                    <YAxis domain={['dataMin, dataMax']} 
                            axisLine={false} 
                            tick={false}/>
                    <Tooltip cursor={false}
                            position={{y: 10}} 
                            content={<CustomTooltip oldPrice = {open} date = {this.props.range === '1d' ? data[0].date : null}/>}/>
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
        if (props.payload[0] && props.payload[0].payload) {
            let currPrice = (props.payload[0].payload.high)
            price.innerText = currPrice
            change.innerText = currPrice - oldPrice
        }
        return (
            <div >
                <p>{props.date}</p>
                <p>{props.label}</p>
            </div>
        );
    }

    return null;
};


export default HistStock