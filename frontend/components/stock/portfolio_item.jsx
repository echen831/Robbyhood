import React from 'react';


class PortfolioItem extends React.Component {
    constructor(props) {
        super(props)
    }

    componentDidMount() {
        let { fetchHistStock, symbol} = this.props
        fetchHistStock(symbol, '1d')
    }

    render () {

        let { currentUser, symbol, idx } = this.props
    
        return (
            <div className='portfolio-item-container'
                 key={idx}>
                <div className='pi-name-shares'>
                    <p id='pi-stock-name'>{symbol.toUpperCase()}</p>
                    <p id='pi-shares-owned'>
                        {currentUser.stocks_owned[symbol]}
                        {" "} 
                        {currentUser.stocks_owned[symbol] > 1 ? 'Shares' : 'Share'}</p>
                </div>
                <div className='pi-stock-info'>
    
                </div>
            </div>
        )
    }
}

export default PortfolioItem