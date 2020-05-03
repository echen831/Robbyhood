import React from 'react';

import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip } from 'recharts';


class Stock extends React.Component {
    constructor() {
        super()
        this.state = {
            high: ''
        }
    }

    
    componentDidMount() {
        this.props.fetchIntraDayStock(this.props.match.params.symbol)
    }

    
    render() {
        if (!this.props.stock) return null
        let data = []
        {this.props.stock.forEach(s => {
            let time = s.minute;
            if (time[time.length - 1] === `0` || time[time.length - 1] === `5`) {
                data.push({
                    name: `${s.label}`,
                    close: s.close,
                    high: s.high,
                    low: s.low,
                    avg: s.average
                })
            }
        })}

        return (
            <div>
                <h1>{this.props.match.params.symbol}</h1>

                <LineChart width={800} height={500} data={data} margin={{ top: 50, right: 20, bottom: 5, left: 100 }}>
                    <Line type="monotone" dataKey="high" stroke="#8884d8" dot={false}/>
                    <Line type="monotone" dataKey="low" stroke="#f70505" dot={false}/>
                    {/* <Line type="monotone" dataKey="avg" stroke="#82ca9d" dot={false}/> */}
                    {/* <Line type="monotone" dataKey="close" stroke="#e6e630" dot={false}/> */}
                    <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
                    <XAxis dataKey="name" domain={['dataMin, dataMax']}/>
                    <YAxis type='number' domain={['dataMin, dataMax']}/>
                    <Tooltip />
                </LineChart>

            </div>
        )
    };


    
};

export default Stock