import { RECEIVE_NEWS } from '../actions/stock_actions';

const newsReducer = (oldState = {}, action) => {
    Object.freeze(oldState);

    switch (action.type) {

        case RECEIVE_NEWS:
            return Object.assign({}, oldState, { [action.symbol]: action.news })

        default:
            return oldState;
    }
};

export default newsReducer