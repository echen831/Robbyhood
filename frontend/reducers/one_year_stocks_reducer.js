import { RECEIVE_ONE_YEAR_STOCK, RECEIVE_MULTI_1Y_STOCKS } from '../actions/stock_actions';

const oneYearStocksReducer = (oldState = {}, action) => {
    Object.freeze(oldState);

    switch (action.type) {
        case RECEIVE_ONE_YEAR_STOCK:

            return Object.assign({}, oldState, { [action.symbol]: action.stock });

        case RECEIVE_MULTI_1Y_STOCKS:

            let nextState = Object.assign({}, oldState)

            action.symbols.split(',').forEach((symbol) => {
                nextState[symbol] = action.stocks[symbol.toUpperCase()].chart
            })

            return nextState

            // return Object.assign({}, oldState, action.stocks)

        default:
            return oldState;
    }
};

export default oneYearStocksReducer