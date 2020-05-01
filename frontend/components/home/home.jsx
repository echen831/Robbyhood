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
            <img src="https://cdn.clipart.email/03a4d01c0972c1acbe2db44212f83244_stock-investing-insights-and-information-stocks-png-clipart-_875-624.png" 
                 alt=""
                 className='home-img'
                 />
        </div>
    )
}

export default Home;