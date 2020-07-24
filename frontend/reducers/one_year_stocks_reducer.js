import { RECEIVE_ONE_YEAR_STOCK } from '../actions/stock_actions';

const oneYearStocksReducer = (oldState = {}, action) => {
    Object.freeze(oldState);

    switch (action.type) {
        case RECEIVE_ONE_YEAR_STOCK:

            return Object.assign({}, oldState, { [action.symbol]: action.stock })

        default:
            return oldState;
    }
};

export default oneYearStocksReducer