import { RECEIVE_NEWS, RECEIVE_MULTI_NEWS } from '../actions/stock_actions';

const newsReducer = (oldState = {}, action) => {
    Object.freeze(oldState);

    switch (action.type) {

        case RECEIVE_NEWS:
            return Object.assign({}, oldState, { [action.symbol]: action.news })
        
        case RECEIVE_MULTI_NEWS:
            let nextState = Object.assign({}, oldState)

            action.symbols.split(',').forEach((symbol) => {
                nextState[symbol] = action.news[symbol.toUpperCase()].news
            })

            return nextState    

        default:
            return oldState;
    }
};

export default newsReducer