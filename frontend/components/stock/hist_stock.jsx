import React from 'react';
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip } from 'recharts';

class HistStock extends React.Component {


    componentDidMount() {
        const symbol = this.props.match.params.symbol;
        const range = this.props.match.params.range;
        this.props.fetchHistStock(symbol, range)
    }

    render () {
        // if (!this.props.histData) return null;
        let data = Object.values(this.props.histData)

        return (
            <div>
                {this.props.match.params.symbol}

                <LineChart width={800} height={400} data={data} margin={{ top: 50, right: 20, bottom: 5, left: 100 }}>
                    <Line type="monotone" dataKey="high" stroke="#8884d8" dot={false} />
                    <XAxis dataKey="label" domain={['dataMin, dataMax']} />
                    <YAxis type='number' domain={['dataMin, dataMax']} />
                    <Tooltip/>
                </LineChart>
            </div>
        )
    }
};

export default HistStock