import React from 'react';
import Loader from '../loader/loader';
import Portfolio from './portfolio'
import PortfolioItem  from './portfolio_item';
import News from './news'
import { Header } from '../nav_bar/header_bar'
import { StockShowBar } from './stock_show_bar'


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
        this.updateRange = this.updateRange.bind(this)
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

    updateRange(range) {
        this.setState({range: range})
    }



    
    render() {

        const { name, symbol, range } = this.state;
        const { currentUser, logout, stocks, fetchOneDayStock, portfolio, pageLoading, news} = this.props;

        let oneDayPort = this.oneDayPortfolio()

        let allNews = Object.values(news).reduce((acc, cv) => acc.concat(cv), []) 

        if (pageLoading) return <Loader/>
        return (
            <div className= {!this.state.dark ? 'show-body' : 'show-body-dark'}>
                <Header stocks={stocks}
                        logout={logout}
                        />
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
                            <StockShowBar updateRange={ this.updateRange }
                                          range={ range }/>
                        </div>
                    </div>
                    <div className='stock-show-right'>
                        <div className='stock-bar'>
                            <div className='stock-bar-header'>
                                
                                My Account
                                {/* <p
                                    id='my-account-btn'
                                    onClick={() => this.setState({ accountShow: !this.state.accountShow })}
                                >{this.state.accountShow ? <i className="arrow up"></i> : <i className='arrow down'></i>}</p> */}
                                <div className='menu-btn'
                                     id={this.state.accountShow ? 'menu-btn-open' : ''}
                                     onClick={() => this.setState({ accountShow: !this.state.accountShow })}
            
                                     >
                                    <div className='menu-btn-burger'>
                                    </div>
                                </div>
                            </div>
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
                            <h1 className='stock-bar-header' id='stock-bar-header'>Stocks</h1>
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
