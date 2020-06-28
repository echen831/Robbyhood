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
                        <p>Cash Management offered through Robinhood Financial</p>
                        <button>Disclosure</button>
                    </div>
                    <div id='stocks-description'>
                        <p>Get mobile access to the markets. Invest commission-free in individual companies or bundles of investments (ETFs).</p>
                        <Link>Learn More</Link>
                        <p>Stocks & funds offered through Robinhood Financial</p>
                        <button>Disclosure</button>
                    </div>
                    <div id='options-description'>
                        <p>Be bullish on stocks you believe in and bearish on the ones you don’t. It’s your call.</p>
                        <Link>Learn More</Link>
                        <p>Options offered through Robinhood Financial</p>
                        <button>Disclosure</button>
                    </div>
                    <div id='gold-description'>
                        <p>Access research reports, trade on margin, and make bigger deposits with quicker access to funds—all starting at $5 per month.</p>
                        <Link>Learn More</Link>
                        <p>Gold offered through Robinhood Financial</p>
                        <button>Disclosure</button>
                    </div>
                    <div id='crypto-description'>
                        <p>Tap into the cryptocurrency market to buy, HODL, and sell Bitcoin, Ethereum, Dogecoin, and more, 24/7 with Robinhood Crypto.</p>
                        <Link>Learn More</Link>
                        <p>Crypto offered through Robinhood Crypto, not a member of FINRA.
                           Crypto investing involves significant risks.</p>
                        <button>Disclosure</button>
                    </div>
                </div>

            </div>
        )
    }
}

export default Product