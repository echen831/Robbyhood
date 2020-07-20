import { RECEIVE_OHLC } from '../actions/stock_actions';

const ohlcsReducer = (oldState = {}, action) => {
    Object.freeze(oldState);

    switch (action.type) {
        case RECEIVE_OHLC:

            return Object.assign({}, oldState, { [action.symbol]: action.data })

        default:
            return oldState;
    }
};

export default ohlcsReducer