import React from 'react';
import { Link } from 'react-router-dom';
import HistStock from './hist_stock_container';
import SearchBar from '../search_bar/search_bar'
import { stocks } from './stocks'
import Loader from '../loader/loader';
import Portfolio from './portfolio'
import PortfolioItem  from './portfolio_item';
import News from './news'
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
            accountShow: false
        }
        
        this.update = this.update.bind(this)
        this.setSymbol = this.setSymbol.bind(this)
    }

    componentDidMount() {

        let { pageLoaded, 
              fetchStocks, 
              fetchWatchListItems, 
              fetchUser, 
              currentUser,
              fetchMultiOneYearStocks,
              fetchMultiOneDayStocks,
              fetchMultiNews
            } = this.props

        setTimeout(() => {
            pageLoaded()
        }, 1300);

        fetchStocks()
        fetchWatchListItems()
        fetchUser(currentUser.id)

        let symbols = Object.keys(currentUser.stocks_owned).join(',') || 'AAPL'
        fetchMultiOneYearStocks(symbols, '1y')
        fetchMultiNews(symbols)


        let allSymbols = this.findSymbols(Object.keys(currentUser.stocks_owned), Object.keys(currentUser.wl_items))

        fetchMultiOneDayStocks(allSymbols, '1d')
        

    };

    componentWillUnmount() {
        this.props.setPageLoad()
    }

    oneDayPortfolio() {

        let { currentUser, oneDayStocks } = this.props
        let res = []

        if (!oneDayStocks) return res

        for (let symbol in oneDayStocks) {
            let data = oneDayStocks[symbol]

            for (let i = 0; i < data.length; i++) {
                let open = data[0].high
                let num_owned = currentUser.stocks_owned[symbol]
                if (!num_owned) {
                    continue
                }

                let item = data[i]
                let hash = {
                    date: '',
                    label: '',
                    open: currentUser.buying_power,
                    high: currentUser.buying_power,
                }

                if (!res[i]) {
                    res[i] = hash
                }

                if (item.high) {

                    res[i].date = item.date
                    res[i].label = item.label
                    res[i].open = (open * num_owned)
                    res[i].high += (item.high * num_owned)
                } else if (!item.high) {
                    res[i].date = item.date
                    res[i].label = item.label
                    res[i].open = (open * num_owned)
                    res[i].high += (open * num_owned)
                }
            }

        }
        return res
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
    };

    findSymbols(arr1, arr2) {
        let res = arr1

        for(let i = 0; i < arr2.length; i ++) {
            let symbol = arr2[i]
            if (!res.includes(symbol)) {
                res.push(symbol)
            }
        }

        return res.join(",")
    };



    
    render() {

        const { name, symbol, range } = this.state;
        const { currentUser, logout, stocks, fetchOneDayStock, portfolio, pageLoading, news} = this.props;

        let oneDayPort = this.oneDayPortfolio()

        let allNews = Object.values(news).reduce((acc, cv) => acc.concat(cv), []) 

        // if(!oneDayPort || !oneDayPort[oneDayPort.length-1]) return null

        if (pageLoading) return <Loader/>
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
                        </div>
                        <div className='right-nav'>
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
                            {/* <div id='greeting' >Hi, {currentUser.username}</div> */}
                            <div>Portfolio</div>
                            <div onClick={logout} >Log Out</div>

                            {/* <div className='nav-dropdown'>
                                <h2 className='nav-dropdown-btn'>Account</h2>
                                <span className='nav-dropdown-content'>
                                    <div>
                                        <p>{currentUser.username}</p>
                                        <div>
                                            <div>
                                                <p>Portfolio Value</p>
                                                <p></p>
                                            </div>
                                            <div>
                                                <p>Buying Power</p>
                                                <p></p>
                                            </div>
                                        </div>
                                    </div>
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
                                    oneDayStocks = { oneDayPort }
                                    oneYearStocks = { portfolio.oneYearStocks }
                                    range = { range }

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
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className='stock-show-right'>
                        <div className='stock-bar'>
                            <h1 
                                onClick={() => this.setState({accountShow: !this.state.accountShow})}
                                className='stock-bar-header'
                                id='account-info-header'
                                >My Account</h1>
                            <div className={ this.state.accountShow ? 'account-info-container' : 'account-hide'}>
                                <div className='account-info-greeting'>
                                    <p>{currentUser.username}</p>
                                </div>
                                <div className='account-info'>
                                    <div>
                                        <p>${(!oneDayPort || !oneDayPort[0]) ? this.showAmount(currentUser.buying_power) : this.showAmount(oneDayPort[oneDayPort.length-1].high)}</p>
                                        <p>Portfolio Value</p>
                                    </div>
                                    <div>
                                        <p>${this.showAmount(currentUser.buying_power)}</p>
                                        <p>Buying Power</p>
                                    </div>
                                </div>
                            </div>
                            <h1 className='stock-bar-header'>Stocks</h1>
                            <div>
                                {Object.keys(currentUser.stocks_owned).sort().map((symbol, idx) =>
                                    <PortfolioItem 
                                        myStocks={portfolio.stocks}
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

                                    <PortfolioItem
                                        myStocks={portfolio.stocks}
                                        currentUser={currentUser}
                                        symbol={symbol}
                                        stocks={stocks}
                                        idx={idx}
                                        key={idx}
                                    />
                                //   <WatchListItem 
                                //         key={idx}
                                //         symbol={symbol}
                                //         idx={idx}
                                //         name={currentUser.wl_items[symbol][0]}
                                //   />  
                                )}
                            </div>
                        </div>
                    </div>
                </div>
                <div className='company-info-container'>
                    <div className='company-news-header'>
                        <p id='stock-news'>News</p>
                    </div>
                        <News news={allNews}
                              newsShow={true}/>
                </div>
            </div>
        )
    }
}

export default Show
