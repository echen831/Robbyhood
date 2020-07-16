import { RECEIVE_ONE_DAY_STOCK } from '../actions/stock_actions';

const portfolioStocksReducer = (oldState = {}, action) => {
    Object.freeze(oldState);

    switch (action.type) {
        case RECEIVE_ONE_DAY_STOCK:

            return Object.assign({}, oldState, { [action.symbol]: action.stock })

        default:
            return oldState;
    }
};

export default portfolioStocksReducer