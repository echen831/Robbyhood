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
            <marquee> It's Time to do Money</marquee>
            <img src="https://cdn.robinhood.com/assets/robinhood/brand/0ac83d822d7f714396eebe65b54b2fa5-1x.png" 
                 alt=""
                 className='home-img'
                 />

            <ul>
                <Link to={`/stocks/${'AAPL'}`}> Apple </Link>
                <Link to={`/stocks/${'CCL'}`}> Carnival </Link>
                <Link to={`/stocks/${'AMZN'}`}> Amazon </Link>
            </ul>
        </div>
    )
}

export default Home;