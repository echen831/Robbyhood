import React from 'react';
import { Link } from 'react-router-dom';
import HistStock from './hist_stock_container';
import SearchBar from '../search_bar/search_bar'
import { stocks } from './stocks'
import Loader from '../loader/loader';

// const stocks = [
//     {name: 'APPLE', symbol: 'aapl'},
//     {name: 'CARNIVAL', symbol: 'ccl'},
//     {name: 'MICROSOFT', symbol: 'msft'},
//     {name: 'TESLA', symbol: 'tsla'},
//     {name: 'FORD', symbol: 'f'},
//     {name: 'FACEBOOK', symbol: 'fb'},
//     {name: 'FEDEX CORP', symbol: 'fdx'}
// ]



class Show extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            name: 'APPLE',
            symbol: 'aapl',
            range: '1d',
            search: '',
            dark: false
        }
        
        this.update = this.update.bind(this)
        this.setSymbol = this.setSymbol.bind(this)
    }



    update(field) {
        return (e) => this.setState({ [field]: e.currentTarget.value })
    };

    setSymbol(symbol) {
        this.setState({search: symbol})
    }

    
    render() {
        const {name, symbol, range} = this.state;
        const { currentUser, logout } = this.props;
        // if (this.props.loading) return <Loader/>
        return (
            <div className= {!this.state.dark ? 'show-body' : 'show-body-dark'}>
                <header className='stock-show-header'>
                    <div className='top-nav'>
                        <div className= 'left-nav'>
                            <div>
                                <Link to='/' className='header-logo'>
                                    <h2>Robbyhood ➶</h2>
                                </Link>
                            </div>

                            <div className='stock-searchbar'>
                                <SearchBar stocks={stocks} setState={this.setSymbol}/>
                                {/* <input type="text"
                                    value={this.state.search}
                                    onChange={this.update('search')}
                                    className='search-input'
                                /> */}
                                {/* <Link to={`/search/stocks/${this.state.search}`}>
                                    <button className='go-btn'>Go</button>
                                </Link> */}
                            </div>
                        </div>
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
                                    <p onClick={() => this.setState({
                                        dark: !this.state.dark
                                        })}
                                    >{this.state.dark ? 'Light' : 'Dark'}</p>
                                    <p onClick={logout}> Log Out</p>
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
                                            name={name} 
                                            range={range}/>
                            </div>
                            
                            <div className='stock-show-bar-container'>
                                <ul className='stock-show-bar'>
                                    <button onClick={() => this.setState({ range: '1d' })}
                                            className={ range === '1d' ? 'selected' : ''}
                                        >1D</button>
                                    <button onClick={()=> this.setState({range: '5d'})}
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
                                    <button onClick={() => this.setState({ range: '5y' })}
                                        className={range === '5y' ? 'selected' : ''}
                                        >5Y</button>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className='stock-show-right'>
                        <div className='stock-bar'>
                            <h1 className='stock-bar-header'>Stocks</h1>
                            <div>

                                {stocks.map((stock, idx) => (
                                    <span onClick={() => this.setState({
                                        symbol: stock.symbol,
                                        name: stock.name
                                    })}
                                        className={name === stock.name ? 'selected' : ''}
                                        key={idx}
                                >{stock.name}</span>
                                ))}
                
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Show
