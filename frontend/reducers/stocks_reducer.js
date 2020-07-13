import {RECEIVE_ONE_STOCK, RECEIVE_STOCKS} from '../actions/stock_actions';

const stocksReducer = (oldState = {}, action) => {
    Object.freeze(oldState);

    switch (action.type) {
        case RECEIVE_STOCKS:
            
            return Object.assign({}, oldState, action.stocks)

        // case RECEIVE_ONE_STOCK:
        //     return Object.assign({}, oldState, {[action.symbol]: action.stock})
    
        default:
            return oldState;
    }
};

export default stocksReducer