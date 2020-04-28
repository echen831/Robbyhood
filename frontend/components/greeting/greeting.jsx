import React from 'react';
import { Link } from 'react-router-dom';

const Greeting = ({ currentUser, logout }) => {

    const display = currentUser ? (
        <div>
            <p>Hello, {currentUser.email}</p>
            <button onClick={logout}> Log Out</button>
        </div>
    ) : (
            <div>
                <Link to='/signup'> Sign Up</Link>
                <br />
                <Link to='/login'> Log In</Link>
            </div>
        )


    return (
        <div>
            {display}
        </div>
    )
}

export default Greeting