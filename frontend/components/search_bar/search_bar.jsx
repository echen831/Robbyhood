import React from 'react';
import { Link } from 'react-router-dom';

class SearchBar extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            inputValue: ''
        }

        this.handleInput = this.handleInput.bind(this);
        this.selectStock = this.selectStock.bind(this);
    }


    handleInput(e) {
        this.setState({inputValue: e.currentTarget.value})
    };

    matches() {
        const matches = [];

        if (this.state.inputValue.length === 0) {
            return matches
        }


        let stocks = Object.values(this.props.stocks)
        for( let i = 0; i < stocks.length; i ++) {
            let stock = stocks[i]
            const subName = stock.name.slice(0, this.state.inputValue.length);
            const subSym = stock.symbol.slice(0, this.state.inputValue.length);


            if (subSym.toLowerCase() === this.state.inputValue.toLowerCase() ||
                subName.toLowerCase() === this.state.inputValue.toLowerCase()) {
                matches.push(stock);

                if (matches.length === 10) {
                    return matches
                }
            }
        }

        // let stocks = Object.values(this.props.stocks)
        // stocks.forEach( stock => {
        //     const subName = stock.name.slice(0, this.state.inputValue.length);
        //     const subSym = stock.symbol.slice(0, this.state.inputValue.length);
        //     if (subName.toLowerCase() === this.state.inputValue.toLowerCase() ||
        //         subSym.toLowerCase() === this.state.inputValue.toLowerCase()
        //     ) {
        //         matches.push(stock);
        //     }
        // });

        if (matches.length === 0) {
            matches.push({name: 'No Matches', symbol: false})
        }

        return matches
    }

    selectStock(e) {
        const stock = e.currentTarget.innerText;
        this.setState({inputValue: stock})
    }

    render () {
        const results = this.matches().map((stock, idx) => {

        if (!stock.symbol) {
            return (
                <li key={idx} id='search-no-matches'>{stock.name}</li>
            )
        } else {
            return (
                // <li key={idx}>
                //     <Link  to= {`/search/stocks/${stock.symbol}/${stock.name}`} 
                //     > {stock.symbol.toUpperCase()}  {stock.name}</Link>
                // </li>
                <Link to={`/search/stocks/${stock.symbol}/${stock.name}`}
                      key={idx}> 
                      <li className='search-result-symbol'>
                         {stock.symbol.toUpperCase()} 
                      </li>
                      <li>
                        {stock.name}   
                      </li>
                </Link>
            );
        }
        });
        return (
            <div className='searchbar-container'>

                <div className='searchbar-img'>
                    <p></p>
                </div>

                <input className='searchbar-input'
                        type="text"
                        onChange={this.handleInput}
                        value={this.state.inputValue}
                        placeholder='Search...'/>
                <ul className={ !results.length ? 'searchbar-results-hide' : 'searchbar-results'}>
                    <h2>Stocks</h2>
                    {results}
                </ul>
            </div>
        )

    };
}

export default SearchBar