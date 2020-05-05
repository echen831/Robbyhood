import React from 'react';
import GreetingContainer from '../greeting/greeting_container'
import { Link } from 'react-router-dom'

const Show = () => {
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
                <ul>
                    <Link to={`/stocks/${'AAPL'}`}> Apple </Link>
                    <Link to={`/stocks/${'CCL'}`}> Carnival </Link>
                    <Link to={`/stocks/${'AMZN'}`}> Amazon </Link>
                    <Link to={`/stocks/${'MSFT'}`}> Microsoft </Link>
                    <Link to={`/stocks/${'TSLA'}`}> Tesla </Link>
                </ul>
        </div>
    )
}

export default Show
