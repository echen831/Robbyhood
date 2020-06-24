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
        return (e) => this.setState({ [field]: e.currentTarget.value })
    };



    render() {
        const {currentUser, logout} = this.props
        return (
            <div className='top-nav'>
                <Link to='/' className='header-logo'>
                    <h2>Robbyhood ➶</h2>
                </Link>
   
                <input type="text" 
                        value={this.state.symbol}
                        onChange={this.update('symbol')}
                        className='search-input'
                                />
                <Link to={`/stocks/${this.state.symbol}/1d`}>
                            <button className= 'logout-btn'>Go</button>
                </Link>


                <div className='right-nav'>
                    <div>Free Stocks</div>
                    <div>Portfolio</div>
                    <div>Cash</div>
                    <div>Messages</div>
                    
                    <div className='nav-dropdown'>
                        <h2 className='nav-dropdown-btn'>Account</h2>
                        <span className='nav-dropdown-content'>
                            <p>{currentUser.email}</p>
                            <p>Account</p>
                            <p>Banking</p>
                            <p>History</p>
                            <p onClick={logout}> Log Out</p>
                        </span>
                    </div>
                </div>

            </div>
        )
    };
};

export default NavBar

