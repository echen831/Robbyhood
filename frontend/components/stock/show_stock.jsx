import React from 'react';
import { Link } from 'react-router-dom';
import HistStock from './hist_stock_container';
import SearchBar from '../search_bar/search_bar'
import { stocks } from './stocks'
import Loader from '../loader/loader';
import Portfolio from './portfolio'
import PortfolioItem  from './portfolio_item';
import WatchListItem from './watchlist_item';


class Show extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            name: 'APPLE',
            symbol: 'aapl',
            range: '1d',
            search: '',
            dark: false,
        }
        
        this.update = this.update.bind(this)
        this.setSymbol = this.setSymbol.bind(this)
    }

    componentDidMount() {
        this.props.fetchStocks()
        this.props.fetchWatchListItems()
        this.props.fetchUser(this.props.currentUser.id)


    }

    update(field) {
        return (e) => this.setState({ [field]: e.currentTarget.value })
    };

    setSymbol(symbol) {
        this.setState({search: symbol})
    }

    showAmount(num) {
        if (!num) return null
        let amount = num.toString()
        let priceArr = amount.split('.')
        let dollar = priceArr[0]
        let decimal = priceArr[1]

        if (!decimal || !decimal.length) {
            decimal = '00'
        } else if (decimal.length === 1) {
            decimal += '0'
        } else if (decimal.length > 2) {
            decimal = decimal.slice(0, 2)
        }

        return dollar + '.' + decimal
    }

    
    render() {

        const { name, symbol, range } = this.state;
        const { currentUser, logout, stocks, fetchOneDayStock, myStocks} = this.props;

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
                                <SearchBar stocks={stocks} 
                                           setState={this.setSymbol}
                                           />
                            </div>
                            <div className='footer-contacts'>
                                <a id='footer-github'
                                    target='_blank'
                                    href="https://github.com/echen831">
                                </a>
                                <a id='footer-linkedin'
                                    target='_blank'
                                    href="https://www.linkedin.com/in/eric-chen-782b951a9/" >
                                </a>
                                <a id='footer-facebook'
                                    target='_blank'
                                    href="https://www.facebook.com/profile.php?id=11708937" >
                                </a>
                            </div>
                        </div>
                        <div className='right-nav'>
                            <div id='greeting' >Hi, {currentUser.username}</div>
                            <div>Portfolio</div>
                            <div onClick={logout} >Log Out</div>

                            {/* <div className='nav-dropdown'>
                                <h2 className='nav-dropdown-btn'>About Me</h2>
                                <span className='nav-dropdown-content'>
                            
                                    <p><a 
                                        id='footer-github'
                                        target='_blank'
                                        href="https://github.com/echen831">
                                    GitHub</a></p>
                                    <p><a 
                                        id='footer-linkedin'
                                        target='_blank'
                                        href="https://www.linkedin.com/in/eric-chen-782b951a9/" >
                                    LinkedIn</a>
                                    </p>
                                    <p><a 
                                        id='footer-facebook'
                                        target='_blank'
                                        href="https://www.facebook.com/profile.php?id=11708937" >
                                    Facebook</a></p>
                                    <p onClick={logout}> Log Out</p>
                                </span>
                            </div> */}
                        </div>

                    </div>
                </header>
                <div className='stock-show-container'>
                    <div className='stock-show-left'>
                        <div className='stock-show'>
                            
                            <div className='stock-chart-container'>
                                
                                <Portfolio
                                    currentUser = { currentUser }
                                    oneDayStocks = { myStocks }
                                />
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
                                {Object.keys(currentUser.stocks_owned).sort().map((symbol, idx) =>
                                    <PortfolioItem 
                                        myStocks={myStocks}
                                        currentUser={currentUser}
                                        symbol={symbol}
                                        stocks={stocks}
                                        fetchOneDayStock={fetchOneDayStock}
                                        idx={idx}
                                        key={idx}
                                    />

                                )}
                
                            </div>
                            <h1 className='stock-bar-header'>Watchlist</h1>
                            <div>
                                {Object.keys(currentUser.wl_items).sort().map((symbol, idx) => 
                                  <WatchListItem 
                                        key={idx}
                                        symbol={symbol}
                                        idx={idx}
                                        name={currentUser.wl_items[symbol][0]}
                                  />  
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Show
