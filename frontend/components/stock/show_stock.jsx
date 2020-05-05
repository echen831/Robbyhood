import React from 'react';
import GreetingContainer from '../greeting/greeting_container'
import { Link } from 'react-router-dom'
import IntradayStock from './intraday_stock_container'

class Show extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            name: 'APPLE',
            symbol: 'AAPL'
        }
    }


    
    render() {
        return (
            <div className='body'>
                <header className='header'>
                    <nav className='header-nav'>
                        <Link to='/' className='header-logo'>
                            <h2>Robbyhood ➶</h2>
                        </Link>
                        <GreetingContainer />
                    </nav>
                </header>
                    <ul>
                        <button onClick={()=> this.setState({symbol: 'AAPL', name:'APPLE'})}>Apple</button>
                        <button onClick={() => this.setState({ symbol: 'AMZN', name:'AMAZON' })}>Amazon</button>
                        <button onClick={() => this.setState({ symbol: 'CCL' , name: 'CARNIVAL'})}>Carnival</button>
                    </ul>
                    <div>
                        <IntradayStock symbol={this.state.symbol} name={this.state.name}/>
                    </div>
            </div>
        )
    }
}

export default Show
