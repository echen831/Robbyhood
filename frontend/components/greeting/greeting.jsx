import React from 'react';
import { Link } from 'react-router-dom';

const Greeting = ({ currentUser, logout }) => {

    const display = currentUser ? (
        <div className='logged-in-greeting'>
            <ul className='logged-in-list'>
                <Link className='login-btn' to='/stocks'> Profile </Link>
                <p className='logout-button' onClick={logout}> Log Out</p>
            </ul>
        </div>
    ) : (
            <div className='logged-out-container'>
                <ul className='header-list'>
                    <Link className= 'login-btn' to='/login'> Sign In</Link>
                    <Link className= 'signup-btn' to='/signup'> Sign Up</Link>
                </ul>
            </div>
        )


    return (
        <div className='greeting-container'>
            {display}
        </div>
    )
}

export default Greeting