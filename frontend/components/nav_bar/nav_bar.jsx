import React from 'react';
import { Link } from 'react-router-dom'

class NavBar extends React.Component {

    render() {
        const {currentUser, logout} = this.props
        return (
            <div className='top-nav'>
                <Link to='/stocks' className='header-logo'>
                    <h2>Robbyhood ➶</h2>
                </Link>
                <div className='nav-dropdown'>
                    <h2 className='nav-dropdown-btn'>Account</h2>
                    <div className='nav-dropdown-content'>
                        <p>{currentUser.email}</p>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <h2 onClick={logout} className='logout-btn'> Log Out</h2>
                    </div>
                </div>

            </div>
        )
    };
};

export default NavBar

