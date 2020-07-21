import React from 'react';
import { Link } from 'react-router-dom'
import ProductModal from './product_modal'

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
                    <h1>Upcoming Products</h1>
                </div>
                <div className='products-image'>
                    <img className={this.state.index === 0 ? 'image-show' : 'image-hide'} 
                        src="https://primerevenue.com/wp-content/uploads/2015/11/simplify-cash-management.jpg" alt=""/>
                    <img className={this.state.index === 1 ? 'image-show' : 'image-hide'}
                        src="https://static.seekingalpha.com/uploads/2018/8/14736682_15333783677476_rId5.jpg" alt="" />
                    <img className={this.state.index === 2 ? 'image-show' : 'image-hide'}
                        src="https://lh3.googleusercontent.com/proxy/9u_n_pXeKxFmePPp0KZE7LCJZeSeupZEwma9U-xsJEbRTIrqfJw8ifKtoG-uxXcKYCoXI6Rezh5Z9ZmB3mtKrPH6Q-G3Zq_-Kfs" alt="" />
                    <img className={this.state.index === 3 ? 'image-show' : 'image-hide'}
                        src="https://www.nicepng.com/png/detail/795-7956762_clipart-jokingart-com-transparent-background-gold-coins.png" alt="" />
                    <img className={this.state.index === 4 ? 'image-show' : 'image-hide'}
                        src="https://www.clipartkey.com/mpngs/m/86-863497_cryptocurrency-clipart.png" alt="" />                        
                </div>
                <div className='products-actions'>
                    <ul>
                        <h2 onClick={() => this.setState({ index: 0 })}
                            className={this.state.index === 0 ? 'prod-focus' : ''}
                            disabled={this.state.index === 0 ? true : false}
                            >Cash Management</h2>
                        <h2 onClick={() => this.setState({ index: 1 })}
                            className={this.state.index === 1 ? 'prod-focus' : ''}
                            disabled={this.state.index === 1 ? true : false}
                            >Stocks & Funds</h2>
                        <h2 onClick={() => this.setState({ index: 2 })}
                            className={this.state.index === 2 ? 'prod-focus' : ''}
                            disabled={this.state.index === 2 ? true : false}
                            >Options</h2>
                        <h2 onClick={() => this.setState({ index: 3 })}
                            className={this.state.index === 3 ? 'prod-focus' : ''}
                            disabled={this.state.index === 3 ? true : false}
                            >Gold</h2>
                        <h2 onClick={() => this.setState({ index: 4 })}
                            className={this.state.index === 4 ? 'prod-focus' : ''}
                            disabled={this.state.index === 4 ? true : false}
                            id='crypto'
                            >Crypto</h2>
                    </ul>
                </div>
                <div className='products-descriptions'>
                    <div className= {this.state.index === 0 ? 'prod-des-show' : 'prod-des-hide'}
                        id='cash-management-description'>
                        <p className='prod-des-des'
                            >Earn 0.30% APY* on your uninvested cash and get more flexibility with your brokerage account.</p>
                        {/* <Link>Learn More</Link> */}
                        <a href="https://robinhood.com/us/en/" target='_blank'>Learn More</a>
                        <span className='risk-container'>
                            <p className='prod-des-legend'
                                onClick={()=>{this.props.showModal(this.state.index)}}
                                >Variable APY and Debit Card Disclosures</p> 
                            <p className='prod-des-risk'
                            >Cash Management offered through Robinhood Financial
                            </p>
                        </span>     
                    </div>
                    <div className= {this.state.index === 1 ? 'prod-des-show' : 'prod-des-hide'}
                        id='stocks-description'>
                        <p className='prod-des-des'
                            >Get mobile access to the markets. Invest commission-free in individual companies or bundles of investments (ETFs).</p>
                        <a href="https://robinhood.com/us/en/" target='_blank'>Learn More</a>
                        <span className='risk-container'>
                            <p className='prod-des-legend'
                                onClick={() => { this.props.showModal(this.state.index) }}
                                >Risk Disclosure</p>
                            <p className='prod-des-risk'
                            >Stocks & funds offered through Robinhood Financial
                            </p>
                        </span>  
                    </div>
                    <div className={this.state.index === 2 ? 'prod-des-show' : 'prod-des-hide'}
                        id='options-description'>
                        <p className='prod-des-des'
                            >Be bullish on stocks you believe in and bearish on the ones you don’t. It’s your call.</p>
                        <a href="https://robinhood.com/us/en/" target='_blank'>Learn More</a>
                        <span className='risk-container'>
                            <p className='prod-des-legend'
                                onClick={() => { this.props.showModal(this.state.index) }}
                                >Options Risk Disclosure</p>
                            <p className='prod-des-risk'
                            >Options offered through Robinhood Financial
                            </p>
                        </span>  
                    </div>
                    <div className={this.state.index === 3 ? 'prod-des-show' : 'prod-des-hide'}
                        id='gold-description'>
                        <p className='prod-des-des'
                            >Access research reports, trade on margin, and make bigger deposits with quicker access to funds—all starting at $5 per month.</p>
                        <a href="https://robinhood.com/us/en/" target='_blank'>Learn More</a>
                        <span className='risk-container'>
                            <p className='prod-des-legend'
                                onClick={() => { this.props.showModal(this.state.index) }}
                                >Margin Disclosure</p>
                            <p className='prod-des-risk'
                            >Gold offered through Robinhood Financial
                            </p>
                        </span>  
                    </div>
                    <div className={this.state.index === 4 ? 'prod-des-show' : 'prod-des-hide'}
                        id='crypto-description'>
                        <p className='prod-des-des'
                            >Tap into the cryptocurrency market to buy, HODL, and sell Bitcoin, Ethereum, Dogecoin, and more, 24/7 with Robinhood Crypto.</p>
                        <a href="https://robinhood.com/us/en/" target='_blank'>Learn More</a>
                        <span className='risk-container'>
                            <p className='prod-des-legend'
                                onClick={() => { this.props.showModal(this.state.index) }}
                                >Crypto Risk Disclosure</p>
                            <span className='prod-des-risk'>
                                <p id='crypto-risk-1'
                                    >Crypto offered through Robinhood Crypto, not a member of FINRA.</p>
                                <p id='crypto-risk-2'
                                    >Crypto investing involves significant risks.</p>  
                            </span>
                        </span>
                    </div>
                </div>

            </div>
        )
    }
}

export default Product