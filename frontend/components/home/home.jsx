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
        </div>
    )
}

export default Home;