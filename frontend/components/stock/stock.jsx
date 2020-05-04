import React from 'react';

import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip } from 'recharts';


class Stock extends React.Component {


    
    componentDidMount() {
        this.props.fetchIntraDayStock(this.props.match.params.symbol)
    }

    
    render() {
        if (!this.props.stock) return null
        // let data = this.props.stock
        let data = []

        {for(let i = 0; i < this.props.stock.length; i ++) {
            if (i % 15 === 0) {
                data.push(this.props.stock[i])
            }
        }}

        return (
            <div>
                <h1>{this.props.match.params.symbol}</h1>

                <LineChart width={800} height={400} data={data} margin={{ top: 50, right: 20, bottom: 5, left: 100 }}>
                    <Line type="monotone" dataKey="high" stroke="#8884d8" dot={false}/>
                    <Line type="monotone" dataKey="low" stroke="#f70505" dot={false}/>
                    <Line type="monotone" dataKey="avg" stroke="#82ca9d" dot={false}/>
                    <Line type="monotone" dataKey="close" stroke="#e6e630" dot={false}/>
                    <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
                    <XAxis dataKey="label" domain={['dataMin, dataMax']}/>
                    <YAxis type='number' domain={['dataMin, dataMax']}/>
                    <Tooltip cursor={false}/>
                </LineChart>

            </div>
        )
    };


    
};

export default Stock