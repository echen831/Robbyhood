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

        this.props.stocks.forEach( stock => {
            const subName = stock.name.slice(0, this.state.inputValue.length);
            const subSym = stock.symbol.slice(0, this.state.inputValue.length);
            if (subName.toLowerCase() === this.state.inputValue.toLowerCase() ||
                subSym.toLowerCase() === this.state.inputValue.toLowerCase()
            ) {
                matches.push(stock);
            }
        });

        if (matches.length === 0) {
            matches.push('We were unable to find results')
        }

        return matches
    }

    selectStock(e) {
        const stock = e.currentTarget.innerText;
        this.setState({inputValue: stock})
    }

    render () {
        const results = this.matches().map((stock, idx) => {
            return (
            <li key={idx}><Link  to= {`/search/stocks/${stock.symbol}`} >{stock.name} {stock.symbol}</Link></li>
            );
        });
        return (
            <div>
                <input type="text"
                       onChange={this.handleInput}
                       value={this.state.inputValue}
                       placeholder='Search...'/>
                <ul>
                    {results}
                </ul>
            </div>
        )

    };
}

export default SearchBar