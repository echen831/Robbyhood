import React from 'react';
import { Link } from 'react-router-dom';
import HistStock from './hist_stock_container';
import SearchBar from '../search_bar/search_bar';
import BuySellStock from './buy_sell_stock'
import CompanyInfo from './company_info'
import { stocks } from './stocks' 
import Loader from '../loader/loader'


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
            infoShow: false
        }
        this.update = this.update.bind(this)
    }

    componentDidMount() {
        this.props.fetchHistStock(this.props.symbol, '1d')
        this.props.fetchCompanyInfo(this.props.symbol)
        
        if (!this.props.stocks || !this.props.stocks.length) {
            this.props.fetchStocks()
        }
    }

    componentDidUpdate(prevProps) {
        if (this.props.symbol !== prevProps.symbol) {
            this.props.fetchHistStock(this.props.symbol, '1d')
            this.setState({symbol: this.props.symbol, name: this.props.name})
        }

    } 

    update(field) {
        return (e) => this.setState({ [field]: e.currentTarget.value })
    };


    render () {

        let {symbol, name, range, stock, infoShow} = this.state
        let { stocks, companyInfo } = this.props
        if(!this.props.stock || !companyInfo) return null;
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
                                <SearchBar stocks={stocks} setState={this.setSymbol}/>
                            </div>
                        </div>
                        <div className='right-nav'>
                            
                            <div>Hi, {this.props.currentUser.username}</div>
                            <div><Link to='/stocks'> Portfolio </Link></div>
                            <div onClick={this.props.logout} >Log Out</div>

                        </div>
                    </div>
                </header>
                <div className='stock-show-container'>
                    <div className='stock-show-left'>
                        <div className='stock-show'>
                            
                            <div className='stock-chart-container'>
                                <HistStock symbol={symbol}
                                    name={name}
                                    range={range} />
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
                                      />
                    </div>
                </div>

                <CompanyInfo companyInfo={companyInfo}/>                        

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
