import { RECEIVE_WATCHLISTITEMS, 
        RECEIVE_WATCHLISTITEM, 
        REMOVE_WATCHLISTITEM } from '../actions/transaction_actions';

const watchListItemsReducer = (oldState = {}, action) => {
    Object.freeze(oldState);
    let nextState = {};

    switch (action.type) {


        case RECEIVE_WATCHLISTITEMS:
            nextState = Object.assign({}, oldState)
            action.data.forEach( item => {
                nextState[item.stock_id] = item
            })
            return nextState
        
        case RECEIVE_WATCHLISTITEM:

            return Object.assign({}, oldState, {[action.data.stock_id]: action.data})

        case REMOVE_WATCHLISTITEM:
            nextState = Object.assign({}, oldState)
            for(let key in nextState) {
                let item = nextState[key]
                if (item.id === action.id) {
                    delete nextState[key]
                }
            }
            return nextState

        default:
            return oldState;
    }
};

export default watchListItemsReducer