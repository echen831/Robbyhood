import * as APITransaction from '../util/transactions_api_util';

export const RECEIVE_TRANSACTION = 'RECEIVE_TRANSACTION';
export const RECEIVE_WATCHLISTITEMS = 'RECEIVE_WATCHLISTITEMS';
export const RECEIVE_WATCHLISTITEM = 'RECEIVE_WATCHLISTITEM';
export const REMOVE_WATCHLISTITEM = 'REMOVE_WATCHLISTITEM';

export const RECEIVE_TRANSACTION_ERRORS = 'RECEIVE_TRANSACTION_ERRORS';
export const CLEAR_TRANSACTION_ERRORS = 'CLEAR_TRANSACTION_ERRORS'

const receiveTransaction = (data) => ({
    type: RECEIVE_TRANSACTION,
    data
});

const receiveWatchListItems = (data) => ({
    type: RECEIVE_WATCHLISTITEMS,
    data
});

const receiveWatchListItem = (data) => ({
    type: RECEIVE_WATCHLISTITEM,
    data
});

const removeWatchListItem = (id) => ({
    type: REMOVE_WATCHLISTITEM,
    id
});

const receiveErrors = (errors) => ({
    type: RECEIVE_TRANSACTION_ERRORS,
    errors
});

export const clearErrors = () => ({
    type: CLEAR_TRANSACTION_ERRORS,
});


export const makeTransaction = (transaction) => dispatch => {
    return APITransaction.makeTransaction(transaction)
        .then((data) => dispatch(receiveTransaction(data)), 
        (err) => dispatch(receiveErrors(err.responseJSON)))
        
};

export const fetchWatchListItems = () => dispatch => {
    return APITransaction.fetchWatchListItems()
        .then((items) => dispatch(receiveWatchListItems(items)))
}

export const addWatchListItem = (symbol) => dispatch => {
    return APITransaction.addWatchListItem(symbol) 
        .then((data) => dispatch(receiveWatchListItem(data)))  
};

export const deleteWatchListItem = (id) => dispatch => {
    return APITransaction.deleteWatchListItem(id)
        .then(() => dispatch(removeWatchListItem(id)))
}

