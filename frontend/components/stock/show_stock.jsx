import React from 'react';
import GreetingContainer from '../greeting/greeting_container'
import { Link } from 'react-router-dom'
import IntradayStock from './intraday_stock_container'
import HistStock from './hist_stock_container'
import NavBarContainer from '../nav_bar/nav_bar_container'

class Show extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            name: 'APPLE',
            symbol: 'AAPL',
            range: '1d',
            dark: false
        }
    }


    
    render() {
        const {name, symbol, range} = this.state
        return (
            <div className= {!this.state.dark ? 'show-body' : 'show-body-dark'}>
                <header className='header'>
                    <NavBarContainer/>
                </header>
                <marquee>
                    <ul>
                        <button onClick={()=> this.setState({
                                                    symbol: 'AAPL', 
                                                    name:'APPLE'
                                                    })}
                                className={name === 'APPLE' ? 'selected' : ''}
                            >Apple</button>
                        <button onClick={() => this.setState({ 
                                                    symbol: 'AMZN', 
                                                    name:'AMAZON'
                                                    })}
                                className={name === 'AMAZON' ? 'selected' : ''}
                            >Amazon</button>
                        <button onClick={() => this.setState({ 
                                                    symbol: 'CCL', 
                                                    name: 'CARNIVAL',
                                                    })}
                                className={name === 'CARNIVAL'? 'selected' : ''}
                            >Carnival</button>
                        <button onClick={() => this.setState({
                            symbol: 'MSFT',
                            name: 'MICROSOFT',
                        })}
                            className={name === 'MICROSOFT' ? 'selected' : ''}
                        >Microsoft</button>
                        <button onClick={() => this.setState({
                            symbol: 'TSLA',
                            name: 'TESLA',
                            currStock: 'TESLA'
                        })}
                            className={name === 'TESLA' ? 'selected' : ''}
                        >Tesla</button>
                        <button onClick={() => this.setState({
                                                    dark: !this.state.dark
                                                    })}
                        >{this.state.dark ? 'Light' : 'Dark'}</button>
                    </ul>
                </marquee>
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
