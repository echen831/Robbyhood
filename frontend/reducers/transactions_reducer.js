import { RECEIVE_TRANSACTION, RECEIVE_WATCHLISTITEM, REMOVE_WATCHLISTITEM } from '../actions/transaction_actions';

const transactionsReducer = (oldState = {}, action) => {
    Object.freeze(oldState);

    switch (action.type) {
        case RECEIVE_TRANSACTION:

            return Object.assign({}, oldState, action.data)
        
        case RECEIVE_WATCHLISTITEM:

            return Object.assign({}, oldState, action.data)
        
        case REMOVE_WATCHLISTITEM:

            return Object.assign({}, oldState)

        default:
            return oldState;
    }
};

export default transactionsReducer