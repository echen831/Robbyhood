import React from 'react';
import { Link } from 'react-router-dom'
import GreetingContainer from '../greeting/greeting_container'
import LMC from './lmc'
import Footer from './footer'
import Product from './product'
import ProductModal from './product_modal'


class Home extends React.Component {
    constructor (props) {
        super(props)

        this.state = {
            show: false,
            index: 0
        }

        this.showModal = this.showModal.bind(this)
        this.closeModal = this.closeModal.bind(this)
        this.outsideClose = this.outsideClose.bind(this)
    }

    showModal(index) {
        this.setState({show: true, index: index})
    }

    closeModal() {
        this.setState({show: false})
    }

    outsideClose(e) {
        let modal = document.getElementById('prod-modal-container')
        if(e.target === modal) {
            this.setState({show: false})
        }
    }

    render() {

        return (
            <div className='body'>
                <ProductModal show={this.state.show} 
                              index={this.state.index}
                              outsideClose={this.outsideClose}
                              closeModal={this.closeModal}/>
                <header className='header'>
                    <nav className='header-nav'>
                        <Link to='/'className='header-logo'>
                            <h2>Robbyhood ➶</h2>
                        </Link>
                        <GreetingContainer/>
                    </nav>
                </header>
                <div className='home-body'>
                    <div className='home-body-left'>
                        <div className='home-header'> It's Time to do Money</div>
                        <div className='home-slogan'> Robbyhood, a clone of Robinhood, is a website that allows people to invest in stocks without fees.</div>
                        <div className='home-btn-container'><Link to="/signup"><button id='home-btn'>Sign Up</button></Link></div>
                        
                    </div>
                    <div className='home-body-right'>
                        <img src="/assets/front.gif" 
                            alt=""
                            className='home-img'
                            />
                    </div>    
                </div>
                <div className='fees-body'>
                    <div className='fees-content'>
                        <ul>
                            <h2 id='fees-header' >Break Free from Commission Fees</h2>
                            <p id='fees-slogan' >Make unlimited commission-free trades in stocks, ETFs, and options with Robinhood Financial, as well as buy and sell cryptocurrencies with Robinhood Crypto. See our fee schedule to learn more about cost.</p>
                            <p id='com-dis'
                                onClick={()=>this.showModal(5)}
                                > Commissions Disclosure</p>
                        </ul>
                    </div>
                </div>
                <div className='fractional-shares-body'>
                    <div className='fractional-shares-left'>
                        <h1>Introducing Fractional Shares</h1>
                        <h2>Invest in thousands of stocks with as little as $1.</h2>
                        <div className='fractional-shares-info'>
                            <div>
                                <p>Invest Any Amount</p>
                                <p>Choose how much you want to invest, and we’ll convert from dollars to parts of a whole share.</p>
                            </div>
                            <div>
                                <p>Build a Balanced Portfolio</p>
                                <p>Customize your portfolio with pieces of different companies and funds to help reduce risk.</p>
                            </div>
                            <div>
                                <p>Trade in Real Time</p>
                                <p>Trades placed during market hours are executed at that time, so you’ll always know the share price.</p>
                            </div>
                        </div>
                        <div className='fractional-shares-input'>
                            <input type="text" placeholder='name@email.com'/>
                            <input type="submit" value='Get Early Access'/>
                        </div>
                        <p className='fractional-shares-disclosure'
                           onClick={()=>this.showModal(6)}
                        >Fractional Shares Disclosure</p>
                    </div>
                    <div className='fractional-shares-right'>
                        <img src="/assets/frac_share_img.png" alt=""/>
                    </div>
                </div>
                <LMC/>
                <Product showModal={this.showModal} closeModal={this.closeModal}/>
                <Footer/>
            </div>
        )
    }
}

export default Home;