import React from 'react';
import { Link } from 'react-router-dom';
import HistStock from './hist_stock_container';

class SearchStock extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            symbol: this.props.symbol,
            name: this.props.symbol,
            range: '1d'
        }

    }

    render () {
        let {symbol, name, range} = this.state
        if (!this.props.stock) return null
        return (
            <div className='show-body'>
                <header className='stock-show-header'>
                    <div className='top-nav'>
                        <div className='left-nav'>
                            <div>
                                <Link to='/' className='header-logo'>
                                    <h2>Robbyhood ➶</h2>
                                </Link>
                            </div>

                            {/* <div className='stock-searchbar'>
                                <input type="text"
                                    value={this.state.search}
                                    onChange={this.update('search')}
                                    className='search-input'
                                />
                                <Link to={`/stocks/${this.state.search}/1d`}>
                                    <button className='go-btn'>Go</button>
                                </Link>
                            </div> */}
                        </div>
                        <div className='right-nav'>
                            <div>Free Stocks</div>
                            <div>Portfolio</div>
                            <div>Cash</div>
                            <div>Messages</div>

                            <div className='nav-dropdown'>
                                <h2 className='nav-dropdown-btn'>Account</h2>
                                <span className='nav-dropdown-content'>
                                    <p>{this.props.currentUser.email}</p>
                                    <p>Account</p>
                                    <p>Banking</p>
                                    <p>History</p>
                                    {/* <p onClick={() => this.setState({
                                        dark: !this.state.dark
                                    })}
                                    >{this.state.dark ? 'Light' : 'Dark'}</p> */}
                                    <p onClick={this.props.logout}> Log Out</p>
                                </span>
                            </div>
                        </div>
                    </div>
                </header>
                <div className='stock-show-container'>
                    <div className='stock-show-left'>
                        <div className='stock-show'>

                            <HistStock symbol={symbol}
                                name={name}
                                range={range} />

                            <ul className='stock-show-bar'>
                                <button onClick={() => this.setState({ range: '1d' })}
                                    className={range === '1d' ? 'selected' : ''}
                                >1D</button>
                                <button onClick={() => this.setState({ range: '5d' })}
                                    className={range === '5d' ? 'selected' : ''}
                                >1W</button>
                                <button onClick={() => this.setState({ range: '1m' })}
                                    className={range === '1m' ? 'selected' : ''}
                                >1M</button>
                                <button onClick={() => this.setState({ range: '3m' })}
                                    className={range === '3m' ? 'selected' : ''}
                                >3M</button>
                                <button onClick={() => this.setState({ range: '1y' })}
                                    className={range === '1y' ? 'selected' : ''}
                                >1Y</button>
                            </ul>
                        </div>
                    </div>
                    <div className='stock-show-right'>
                        <div className='stock-bar'>
                            <h1 className='stock-bar-header'>{`Buy ${name}`}</h1>
                            <div>Shares</div>
                                <div>Market Price {this.props.stock[this.props.stock.length-1].close}</div>
                            <div>Estimated Cost</div>
                            <button>Review Order</button>
                            <div>Buying Power Available</div>
                        </div>
                    </div>
                </div>                  

            </div>
        )
    }
};

export default SearchStock
