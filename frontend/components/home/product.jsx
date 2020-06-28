import React from 'react';
import { Link } from 'react-router-dom'

class Product extends React.Component {
    constructor() {
        super()

    }

    render () {
        return (
            <div className='products-body'>
                <div className='products-header'>
                    <h1>Our Products</h1>
                </div>
                <div className='products-image'>
                    <img src="" alt=""/>
                </div>
                <div className='products-actions'>
                    <ul>
                        <h2>Cash Management</h2>
                        <h2>Stocks & Funds</h2>
                        <h2>Options</h2>
                        <h2>Gold</h2>
                        <h2>Crypto</h2>
                    </ul>
                </div>
                <div className='products-descriptions'>
                    <div id='cash-management-description'>
                        <p>Earn 0.30% APY* on your uninvested cash and get more flexibility with your brokerage account.</p>
                        <Link>Learn More</Link>
                    </div>
                    <div id='stocks-description'>
                        <p></p>
                        <Link>Learn More</Link>
                    </div>
                    <div id='options-description'>
                        <p></p>
                        <Link>Learn More</Link>
                    </div>
                    <div id='gold-description'>
                        <p></p>
                        <Link>Learn More</Link>
                    </div>
                    <div id='crypto-description'>
                        <p></p>
                        <Link>Learn More</Link>
                    </div>
                </div>

            </div>
        )
    }
}

export default Product