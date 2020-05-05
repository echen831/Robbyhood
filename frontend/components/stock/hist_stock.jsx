import React from 'react';
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip } from 'recharts';

class HistStock extends React.Component {



    componentDidMount() {
        const symbol = this.props.match.params.symbol;
        const range = this.props.match.params.range;
        this.props.fetchHistStock(symbol, range)
    }

    render () {
        if (!this.props.histData) return null;
        let data = this.props.histData
        let close = data[data.length-1].high
        let open = data[0].high
        return (
            <div>
                <h1>{this.props.match.params.symbol}</h1>
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
                    <XAxis dataKey="date" 
                            tick={false} 
                            axisLine={false} 
                            domain={['dataMin, dataMax'] } />
                    <YAxis domain={['dataMin, dataMax']} 
                            axisLine={false} 
                            tick={false}/>
                    <Tooltip cursor={false}
                            position={{y: 10}} 
                            content={<CustomTooltip oldPrice = {open}/>}/>
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
                <p>{props.label}</p>
            </div>
        );
    }

    return null;
};


export default HistStock