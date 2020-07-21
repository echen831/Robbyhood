import { RECEIVE_WATCHLISTITEMS, 
        RECEIVE_WATCHLISTITEM, 
        REMOVE_WATCHLISTITEM } from '../actions/transaction_actions';

const watchListItemsReducer = (oldState = {}, action) => {
    Object.freeze(oldState);

    switch (action.type) {


        case RECEIVE_WATCHLISTITEMS:

            return Object.assign({}, oldState, action.data)

        case REMOVE_WATCHLISTITEM:
            let nextState = Object.assign({}, oldState)
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