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
    }

    render() {

        return (
            <div className='body'>
                <ProductModal show={this.state.show} index={this.state.index}/>
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
                        <img src="https://cdn.robinhood.com/assets/robinhood/brand/0ac83d822d7f714396eebe65b54b2fa5-1x.png" 
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
                            <p id='com-dis'> Commissions Disclosure</p>
                        </ul>
                    </div>
                </div>
                <LMC/>
                <Product/>
                <Footer/>
            </div>
        )
    }
}

export default Home;