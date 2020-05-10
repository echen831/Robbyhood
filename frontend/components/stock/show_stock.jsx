import React from 'react';
import { Link } from 'react-router-dom'
import HistStock from './hist_stock_container'

const stocks = [
    {name: 'APPLE', symbol: 'AAPL'},
    {name: 'CARNIVAL', symbol: 'CCL'},
    {name: 'MICROSOFT', symbol: 'MSFT'},
    {name: 'TESLA', symbol: 'TSLA'},
    {name: 'FORD', symbol: 'F'},
    {name: 'FACEBOOK', symbol: 'FB'}
]



class Show extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            name: 'APPLE',
            symbol: 'AAPL',
            range: '1d',
            search: '',
            dark: false
        }
        
        this.update = this.update.bind(this)
    }



    update(field) {
        debugger
        return (e) => this.setState({ [field]: e.currentTarget.value })
    };

    
    render() {
        const {name, symbol, range} = this.state;
        const { currentUser, logout } = this.props
        return (
            <div className= {!this.state.dark ? 'show-body' : 'show-body-dark'}>
                <header className='header'>
                    <div className='top-nav'>
                        <Link to='/' className='header-logo'>
                            <h2>Robbyhood ➶</h2>
                        </Link>

                        <input type="text"
                            value={this.state.search}
                            onChange={this.update('search')}
                            className='search-input'
                        />
                        <Link to={`/stocks/${this.state.search}/1d`}>
                            <button className='logout-btn'>Go</button>
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
                <div className='stock-show'>

                    <div>
                        <HistStock symbol={symbol} 
                                    name={name} 
                                    range={range}/>
                    </div>
                    <ul >
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
        )
    }
}

export default Show
