import { RECEIVE_ONE_DAY_STOCK, RECEIVE_MULTI_1D_STOCKS } from '../actions/stock_actions';

const portfolioStocksReducer = (oldState = {}, action) => {
    Object.freeze(oldState);

    switch (action.type) {
        case RECEIVE_ONE_DAY_STOCK:

            return Object.assign({}, oldState, { [action.symbol]: action.stock })
        
        case RECEIVE_MULTI_1D_STOCKS:
            let nextState = Object.assign({}, oldState)

            action.symbols.split(',').forEach((symbol) => {
                nextState[symbol] = action.stocks[symbol.toUpperCase()].chart
            })

            return nextState

        default:
            return oldState;
    }
};

export default portfolioStocksReducer