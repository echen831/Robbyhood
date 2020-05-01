import React from 'react';
import { Link } from 'react-router-dom';

const Greeting = ({ currentUser, logout }) => {

    const display = currentUser ? (
        <div>
            <ul>
                <p>Hello, {currentUser.email}</p>
                <button onClick={logout} className='logout-btn'> Log Out</button>
            </ul>
            <span>My Account</span>
        </div>
    ) : (
            <div>
                <ul className='header-list'>
                    <Link className= 'login-btn' to='/login'> Sign In</Link>
                    <Link className= 'signup-btn' to='/signup'> Sign Up</Link>
                </ul>
            </div>
        )


    return (
        <div>
            {display}
        </div>
    )
}

export default Greeting