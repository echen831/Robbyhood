import React from 'react';
import { Link } from 'react-router-dom';
import HistStock from './hist_stock_container';
import SearchBar from '../search_bar/search_bar';
import { stocks } from './stocks' 
import Loader from '../loader/loader'


const searchRange = [ '1d', '5d', '1m', '3m', '1y', '5y']

class SearchStock extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            symbol: this.props.symbol,
            name: this.props.symbol,
            range: '1d',
            stock: this.props.stock,
            search: '',
        }
        this.update = this.update.bind(this)
    }

    componentDidMount() {
        this.props.fetchHistStock(this.props.symbol, '1d')
    }

    componentDidUpdate(prevProps) {
        if (this.props.symbol !== prevProps.symbol) {
            this.props.fetchHistStock(this.props.symbol, '1d')
            this.setState({symbol: this.props.symbol})
        }
    } 

    update(field) {
        return (e) => this.setState({ [field]: e.currentTarget.value })
    };

    render () {

        let {symbol, name, range, stock} = this.state
        if(!this.props.stock) return null;
        // if(this.props.loading) return <Loader/>
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

                            <div className='stock-searchbar'>
                                <SearchBar stocks={stocks} setState={this.setSymbol} />
                            </div>
                        </div>
                        <div className='right-nav'>
                            <div>Free Stocks</div>
                            <div><Link to='/stocks'> Portfolio </Link></div>
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
                            
                            <div className='stock-chart-container'>
                                <HistStock symbol={symbol}
                                    //name={name}
                                    range={range} />
                            </div>

                            <ul className='stock-show-bar'>
                                {searchRange.map((sRange, idx) => (
                                    <button key={idx}
                                            onClick={() => this.setState({ range: sRange })}
                                            className={range === sRange ? 'selected' : ''}
                                    >{sRange === '5d' ? '1W' : sRange.toUpperCase()}</button>
                                ))}
                            </ul>
                        </div>
                    </div>
                    <div className='stock-show-right'>
                        <div className='stock-bar'>
                            <h1 className='stock-bar-header'>{`Buy ${symbol.toUpperCase()}`}</h1>
                            <div>Shares</div>
                            <div>Market Price </div>
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

const NoMatch = () => {
    return (
        <div>
            404 Page not found
            <Link to='/stocks'>
                <h2>Back To Profile</h2>
            </Link>
        </div>
    )
}

export default SearchStock
