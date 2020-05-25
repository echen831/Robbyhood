import React from 'react';
import { Link } from 'react-router-dom'
import GreetingContainer from '../greeting/greeting_container'

const Home = () => {

    return (
        <div className='body'>
            <header className='header'>
                <nav className='header-nav'>
                    <Link to='/' className='header-logo'>
                        <h2>Robbyhood ➶</h2>
                    </Link>
                    <GreetingContainer />
                </nav>
            </header>
            <div className='home-body'>
                <div className='home-header'> It's Time to do Money</div>
                <p className='home-slogan'> Robbyhood, a clone of Robinhood, is a website that allows people to invest in stocks without fees.</p>
                <img src="https://cdn.robinhood.com/assets/robinhood/brand/0ac83d822d7f714396eebe65b54b2fa5-1x.png" 
                    alt=""
                    className='home-img'
                    />
                
                    <Link to="/signup"><button id='home-btn'>Sign Up</button></Link>
                
            </div>
        </div>
    )
}

export default Home;