import { RECEIVE_ONE_STOCK } from '../actions/stock_actions';

const graphsReducer = (oldState = {}, action) => {
    Object.freeze(oldState);

    switch (action.type) {

        case RECEIVE_ONE_STOCK:
            return Object.assign({}, oldState, { [action.symbol]: action.stock })

        default:
            return oldState;
    }
};

export default graphsReducer