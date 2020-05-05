import React from 'react';

import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip } from 'recharts';


class IntraDayStock extends React.Component {
    constructor(props) {
        super(props) 

    }


    
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
                <h2 id='stockPrice'>{data[data.length-1].average}</h2>
                <h2 id='stockChange'></h2>

                <LineChart width={800} 
                            height={400} 
                            data={data} 
                            margin={{ top: 50, right: 20, bottom: 5, left: 100 }}>
                    <Line type="monotone" 
                            connectNulls 
                            dataKey="average" 
                            stroke="#8884d8" 
                            dot={false}/>
                    <XAxis dataKey="label" 
                            domain={['dataMin, dataMax']} 
                            tick={false} 
                            axisLine={false}/>
                    <YAxis type='number' 
                            domain={['dataMin, dataMax']} 
                            tick={false} 
                            axisLine={false}/>
                    <Tooltip 
                            content={<CustomTooltip/>}
                            position={{y: 0}}/>
                </LineChart>

            </div>
        )
    };
};

const CustomTooltip = (props) => {
    if (props.active) {
        const price = document.getElementById('stockPrice')
        const change = document.getElementById('stockChange')

        
        if (props.payload[0] && props.payload[0].payload) {
            console.log(oldPrice)
            console.log('.......')
            let newPrice = props.payload[0].payload.average
            price.innerText = newPrice
            console.log(newPrice)
            
        }
        let oldPrice = price.innerText
        change.innerText = oldPrice 
        
        return (
            <div >
                <p>{props.label}</p>
            </div>
        );
    }

    return null;
};

// keying in to data: props.payload[0].payload.average



export default IntraDayStock