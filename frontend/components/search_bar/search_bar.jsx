import React from 'react';

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
            const sub = stock.name.slice(0, this.state.inputValue.length);
            if (sub.toLowerCase() === this.state.inputValue.toLowerCase()) {
                matches.push(stock.name);
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
                <li key={idx} onClick={this.selectStock}>{stock}</li>
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