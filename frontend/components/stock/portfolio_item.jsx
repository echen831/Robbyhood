import React from 'react';


export const PortfolioItem = (props) => {
    let { currentUser, stock, idx } = props

    return (
        <div className='portfolio-item-container'
             key={idx}>
            <div className='pi-name-shares'>
                <p id='pi-stock-name'>{stock}</p>
                <p id='pi-shares-owned'>
                    {currentUser.stocks_owned[stock]}
                    {" "} 
                    {currentUser.stocks_owned[stock] > 1 ? 'Shares' : 'Share'}</p>
            </div>
            <div className='pi-stock-info'>

            </div>
        </div>
    )
}