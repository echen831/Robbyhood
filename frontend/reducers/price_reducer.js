import { RECEIVE_HIGH_LOW } from '../actions/stock_actions';

const priceReducer = (oldState = {}, action) => {
    Object.freeze(oldState);

    switch (action.type) {

        case RECEIVE_HIGH_LOW:
            return Object.assign({}, oldState, { [action.symbol]: action.stock })

        default:
            return oldState;
    }
};

export default priceReducer