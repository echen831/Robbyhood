import {
    RECEIVE_TRANSACTION,
    RECEIVE_TRANSACTION_ERRORS,
    CLEAR_TRANSACTION_ERRORS
} from '../actions/transaction_actions'


const transactionErrorsReducer = (oldState = [], action) => {
    Object.freeze(oldState);

    switch (action.type) {
        case RECEIVE_TRANSACTION_ERRORS:

            return action.errors;

        case RECEIVE_TRANSACTION:

            return [];

        case CLEAR_TRANSACTION_ERRORS:

            return [];

        default:

            return oldState;
    }
}

export default transactionErrorsReducer