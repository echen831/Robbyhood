import React from 'react';

class Stock extends React.Component {

    componentDidMount() {
        this.props.fetchIntraDayStock(this.props.match.params.symbol)
    }

    render() {

        // if (!this.props.stock) return null

        return (
            <div>
                {this.props.stock.map(s => (s.minute))}
            </div>
        )
    };
};

export default Stock