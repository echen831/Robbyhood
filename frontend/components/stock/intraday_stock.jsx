import React from 'react';

import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip } from 'recharts';


class IntraDayStock extends React.Component {
    constructor(props) {
        super(props)

    }


    
    componentDidMount() {
        this.props.fetchIntraDayStock(this.props.symbol)
    }

    componentDidUpdate(prevProps) {
        if (this.props.symbol !== prevProps.symbol) {
            this.props.fetchIntraDayStock(this.props.symbol)
        }
    }

    
    render() {
        if (!this.props.stock) return null
        // let data = this.props.stock
        let data = []

        {for(let i = 0; i < this.props.stock.length; i ++) {
            if (i % 5 === 0) {
                data.push(this.props.stock[i])
            }
        }}

        let close = 

        return (
            <div>
                <h1>{this.props.name}</h1>
                <h2 id='stockPrice'>{data[data.length-1].average}</h2>
                <h2 id='stockChange'>0.00</h2>

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
    const price = document.getElementById('stockPrice')
    const change = document.getElementById('stockChange')
    if (props.active) {
        let oldPrice = price.innerText
        change.innerText = oldPrice 

        
        if (props.payload[0] && props.payload[0].payload) {
            let newPrice = props.payload[0].payload.average
            price.innerText = newPrice
            console.log('********')
            console.log(oldPrice)
            console.log('.......')
            console.log(newPrice)
            console.log('--------')
            
        }
        
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