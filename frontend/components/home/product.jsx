import React from 'react';
import { Link } from 'react-router-dom'

class Product extends React.Component {
    constructor() {
        super()

        this.state = {
            index: 0
        }
    }

    render () {
        return (
            <div className='products-body'>
                <div className='products-header'>
                    <h1>Our Products</h1>
                </div>
                <div className='products-image'>
                    <img className={this.state.index === 0 ? 'image-show' : 'image-hide'} 
                         src="/assets/cash_management.png" alt=""/>
                    <img className={this.state.index === 1 ? 'image-show' : 'image-hide'}
                        src="/assets/stock_funds.png" alt="" />
                    <img className={this.state.index === 2 ? 'image-show' : 'image-hide'}
                        src="/assets/options.png" alt="" />
                    <img className={this.state.index === 3 ? 'image-show' : 'image-hide'}
                        src="/assets/gold.png" alt="" />
                    <img className={this.state.index === 4 ? 'image-show' : 'image-hide'}
                        src="/assets/crypto.png" alt="" />                        
                </div>
                <div className='products-actions'>
                    <ul>
                        <h2 onClick={() => this.setState({ index: 0 })}
                            className={this.state.index === 0 ? 'prod-focus' : ''}
                            >Cash Management</h2>
                        <h2 onClick={() => this.setState({ index: 1 })}
                            className={this.state.index === 1 ? 'prod-focus' : ''}
                            >Stocks & Funds</h2>
                        <h2 onClick={() => this.setState({ index: 2 })}
                            className={this.state.index === 2 ? 'prod-focus' : ''}
                            >Options</h2>
                        <h2 onClick={() => this.setState({ index: 3 })}
                            className={this.state.index === 3 ? 'prod-focus' : ''}
                            >Gold</h2>
                        <h2 onClick={() => this.setState({ index: 4 })}
                            className={this.state.index === 4 ? 'prod-focus' : ''}
                            id='crypto'
                            >Crypto</h2>
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