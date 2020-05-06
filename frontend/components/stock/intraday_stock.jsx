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

        let close = data[data.length-1].average
        let open = data[0].average

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
                            content={<CustomTooltip oldPrice={open}/>}
                            position={{y: 0}}/>
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
            let currPrice = (props.payload[0].payload.average)
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

// keying in to data: props.payload[0].payload.average



export default IntraDayStock