import React from 'react';
import { Link } from 'react-router-dom'

class NavBar extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            symbol: ''
        };

    };


    update(field) {
        debugger
        return (e) => this.setState({ [field]: e.currentTarget.value })
    };



    render() {
        const {currentUser, logout} = this.props
        return (
            <div className='top-nav'>
                <Link to='/' className='header-logo'>
                    <h2>Robbyhood ➶</h2>
                </Link>
                <div className='search-bar'>
                        <input type="text" 
                                value={this.state.symbol}
                                onChange={this.update('symbol')}
                                className='search-input'
                                />
                        <Link to={`/stocks/${this.state.symbol}/1d`}>Go</Link>
                </div>
                
                <div className='nav-dropdown'>
                    <h2 className='nav-dropdown-btn'>Account</h2>
                    <div className='nav-dropdown-content'>
                        <p>{currentUser.email}</p>
                        <p onClick={logout} className='logout-btn'> Log Out</p>
                    </div>
                </div>

            </div>
        )
    };
};

export default NavBar

