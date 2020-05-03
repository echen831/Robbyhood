import React from 'react';

// testing recharts
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip } from 'recharts';

let A = { name: 'Page A', uv: 500, pv: 0, amt: 2400 }
let B = { name: 'Page B', uv: 400, pv: 2400, amt: 2400 }
let C = { name: 'Page C', uv: 250, pv: 2400, amt: 2400 }
let D = { name: 'Page D', uv: 100, pv: 100, amt: 100}

//testing

class Stock extends React.Component {
    
    componentDidMount() {
        this.props.fetchIntraDayStock(this.props.match.params.symbol)
    }

    

    render() {
        if (!this.props.stock) return null
        let data = []
        return (
            <div>
                <h1>{this.props.match.params.symbol}</h1>
                {this.props.stock.forEach(s => {
                    let time = s.minute;
                    if (time[time.length - 1] === `0` || time[time.length - 1] === `5`) {
                        data.push({
                            name: `${s.label}`,
                            high: s.high,
                            low: s.low,
                            avg: s.average
                        })
                    }
                })}

                <LineChart width={800} height={500} data={data} margin={{ top: 50, right: 20, bottom: 5, left: 100 }}>
                    <Line type="monotone" dataKey="high" stroke="#8884d8" dot={false}/>
                    <Line type="monotone" dataKey="low" stroke="#f70505" dot={false}/>
                    <Line type="monotone" dataKey="avg" stroke="#82ca9d" dot={false}/>
                    <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
                    <XAxis dataKey="name" />
                    <YAxis type='number' domain={['dataMin, dataMax']}/>
                    <Tooltip />
                </LineChart>

            </div>
        )
    };


    
};

export default Stock