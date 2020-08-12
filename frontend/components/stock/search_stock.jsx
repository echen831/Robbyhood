import React from 'react';
import { Link } from 'react-router-dom';
import HistStock from './hist_stock_container';
import BuySellStock from './buy_sell_stock';
import CompanyInfo from './company_info';
import News from './news';
import Loader from '../loader/loader';
import { Header } from '../nav_bar/header_bar';


const searchRange = [ '1d', '5d', '1m', '3m', '1y', '5y']

class SearchStock extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            symbol: this.props.symbol,
            name: this.props.name,
            range: '1d',
            stock: this.props.stock,
            price: '',
            search: '',
            transactions: 0,
            infoShow: false,
            newsShow: false
        }

        this.update = this.update.bind(this)
        this.handleTransaction = this.handleTransaction.bind(this)
        this.updateRange = this.updateRange.bind(this)
    }

    componentDidMount() {

        setTimeout(() => {
            this.props.pageLoaded()
        }, 1500);

        let { symbol, fetchHistStock, fetchCompanyInfo, fetchNews, fetchWatchListItems, stocks } = this.props

        fetchHistStock(symbol, '1d')
        fetchCompanyInfo(symbol)

        if (!this.props.news) {
            fetchNews(symbol)
        }

        fetchWatchListItems()

        if (this.props.currentUser) {
            this.props.fetchUser(this.props.currentUser.id)
        }
        
        if (!stocks || !stocks.length) {
            this.props.fetchStocks()
        }
    }

    componentDidUpdate(prevProps) {

        let { symbol, name, currentUser, fetchHistStock, watchListItems, fetchUser, transactions, fetchNews, fetchCompanyInfo } = this.props

        if (symbol !== prevProps.symbol) {
            fetchHistStock(symbol, '1d')
            fetchNews(symbol)
            fetchCompanyInfo(symbol)
            this.props.setPageLoading()
            setTimeout(() => {
                this.props.pageLoaded()
            }, 1500);
            this.setState({symbol: symbol, name: name})
        }

        let prevTrans = Object.keys(prevProps.transactions)
        let currTrans = Object.keys(transactions)

        let prevItems = Object.values(prevProps.watchListItems)
        let currItems = Object.values(watchListItems)
        
        if (prevItems.length !== currItems.length || prevTrans.length !== currTrans.length) {
            fetchUser(currentUser.id)
        }
        

    } 

    componentWillUnmount() {
        this.props.setPageLoading()
    };

    handleTransaction(transaction) {
        this.props.makeTransaction(transaction)
            .then(this.setState({transactions: this.state.transactions += 1}))
    }

    update(field) {
        return (e) => this.setState({ [field]: e.currentTarget.value })
    };

    updateRange(range) {
        this.setState({ range: range })
    }


    render () {

        let {symbol, name, range, infoShow, newsShow } = this.state
        let { stocks, companyInfo, news, pageLoading, logout } = this.props
        if(!this.props.stock) return null;
        if(this.props.pageLoading) return <Loader/>
        return (
            <div className='show-body'>
                <Header stocks={stocks}
                        logout={logout}
                />
                <div className='stock-show-container'>
                    <div className='stock-show-left'>
                        <div className='stock-show'>
                            
                            <div className='stock-chart-container'>
                                <HistStock symbol={symbol}
                                    name={name}
                                    range={range}
                                    updateRange={this.updateRange} />
                            </div>
                            <div className='stock-show-bar-container'>
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
                    </div>
                    <div className='stock-show-right'>
                        <BuySellStock name={this.props.name} 
                                      symbol={this.props.symbol}
                                      stock={this.props.stock} 
                                      stocks={this.props.stocks}
                                      currentUser={this.props.currentUser}
                                      makeTransaction={this.props.makeTransaction}
                                      fetchUser={this.props.fetchUser}
                                      transactions={this.state.transactions}
                                      handleTransaction={this.handleTransaction}
                                      addWatchListItem={this.props.addWatchListItem}
                                      deleteWatchListItem={this.props.deleteWatchListItem}
                                      />
                    </div>
                </div>
                <div className='company-info-container'>
                    <div className='company-info-header'>
                        <p>About</p>
                        <p onClick={() => this.setState({ infoShow: !infoShow })}>{!infoShow ? 'show' : 'hide'}</p>
                    </div>
                    <CompanyInfo companyInfo={companyInfo} 
                                 infoShow={infoShow}
                    />  
                </div>
                <div className='company-news-container'>
                    <div className='company-news-header'>
                        <p>News</p>
                        <p onClick={() => this.setState({ newsShow: !newsShow })}>{!newsShow ? 'show' : 'hide'}</p>
                    </div>                   
                    <News news={news}
                          newsShow={newsShow}
                    />                       
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
