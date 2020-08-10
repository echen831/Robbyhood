import React, { useState } from 'react'

export const StockBarHeader = (props) => {
    const [ accountShow, setShow ] = useState(false)

    let { currentUser, showAmount, oneDayPort } = props
 
    return (
        <div>
            <div className='stock-bar-header'>
                My Account
                <div className='menu-btn'
                    id={ accountShow ? 'menu-btn-open' : ''}
                    onClick={() => setShow(!accountShow)}>
                    <div className='menu-btn-burger'>
                    </div>
                </div>
            </div>
            <div className={ accountShow ? 'account-info-container' : 'account-hide'}>
                <div className='account-info-greeting'>
                    <p>{currentUser.username}</p>
                </div>
                <div className='account-info'>
                    <div>
                        <p>${(!oneDayPort || !oneDayPort[0]) ? showAmount(currentUser.buying_power) : showAmount(oneDayPort[oneDayPort.length - 1].high)}</p>
                        <p>Portfolio Value</p>
                    </div>
                    <div>
                        <p>${ showAmount(currentUser.buying_power)}</p>
                        <p>Buying Power</p>
                    </div>
                </div>
            </div>
        </div>
    )
};