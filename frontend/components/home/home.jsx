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
                        <div className='home-header'> It's Time to Learn About Stocks</div>
                        <div className='home-slogan'> Robbyhood, a clone of Robinhood, is a website that allows people to learn investing in stocks without using actual money.</div>
                        <div className='home-btn-container'><Link to="/signup"><button id='home-btn'>Sign Up</button></Link></div>
                        
                    </div>
                    <div className='home-body-right'>
                        <img src="https://media1.giphy.com/media/dxV1twjt4OxR99BwDZ/source.gif" 
                            alt=""
                            className='home-img'
                            />
                    </div>    
                </div>
                <div className='fees-body'>
                    <div className='fees-content'>
                        <ul>
                            <h2 id='fees-header' >Investing is simple and easy</h2>
                            <p id='fees-slogan' >Make unlimited commission-free trades in stocks without actually using real money.  Robbyhood mimics profits and losses of an actual investment</p>
                            <p id='com-dis'
                                onClick={()=>this.showModal(5)}
                                > Investment Disclosure</p>
                        </ul>
                    </div>
                </div>
                <div className='fractional-shares-body'>
                    <div className='fractional-shares-left'>
                        <h1>Introducing Robbyhood</h1>
                        <h2>Learn to invest with thousands of actual stocks.</h2>
                        <div className='fractional-shares-info'>
                            <div>
                                <p>Choose your starting amount</p>
                                <p>At sign up, you are given the choices of $1000, $3000, $5000 and $10,000</p>
                            </div>
                            <div>
                                <p>Don't miss out</p>
                                <p>Customize your watchlist and buy at the right moment.</p>
                            </div>
                            <div>
                                <p>Trade in Real Time</p>
                                <p>Trades placed during market hours are executed at that time, so you’ll always know the share price.</p>
                            </div>
                        </div>
                        <div className='fractional-shares-input'>
                            <input type="text" placeholder='name@email.com'/>
                            <Link to="/signup"><input type="submit" value='Get Started Now!'/></Link>
                        </div>
                        <p className='fractional-shares-disclosure'
                           onClick={()=>this.showModal(6)}
                        >Robbyhood Disclosure</p>
                    </div>
                    <div className='fractional-shares-right'>
                        <img src="https://images.vexels.com/media/users/3/148202/isolated/preview/33784b3ee65577bbdbcb91c32ca2a8fd-colorful-geometric-shapes-background-by-vexels.png" alt=""/>
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