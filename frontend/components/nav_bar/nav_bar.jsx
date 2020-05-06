import React from 'react';
import { Link } from 'react-router-dom'

class NavBar extends React.Component {

    render() {
        const {currentUser, logout} = this.props
        return (
            <div class='top-nav'>
                <Link to='/stocks' className='header-logo'>
                    <h2>Robbyhood ➶</h2>
                </Link>
                <div className='nav-dropdown'>
                    <h2 className='nav-dropdown-btn'>Account</h2>
                    <div className='nav-dropdown-content'>
                        <p>Hello, {currentUser.email}</p>
                        <button onClick={logout} className='logout-btn'> Log Out</button>
                    </div>
                </div>

            </div>
        )
    };
};

export default NavBar

