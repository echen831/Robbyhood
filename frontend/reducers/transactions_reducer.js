import { RECEIVE_TRANSACTION, RECEIVE_WATCHLISTITEM } from '../actions/transaction_actions';

const transactionsReducer = (oldState = {}, action) => {
    Object.freeze(oldState);

    switch (action.type) {
        case RECEIVE_TRANSACTION:

            return Object.assign({}, oldState, action.data)
        
        case RECEIVE_WATCHLISTITEM:

            return Object.assign({}, oldState, action.data)

        default:
            return oldState;
    }
};

export default transactionsReducer