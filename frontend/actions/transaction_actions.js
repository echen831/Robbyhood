import * as APITransaction from '../util/transactions_api_util';

export const RECEIVE_TRANSACTION = 'RECEIVE_TRANSACTION';
export const RECEIVE_WATCHLISTITEMS = 'RECEIVE_WATCHLISTITEMS';
export const RECEIVE_WATCHLISTITEM = 'RECEIVE_WATCHLISTITEM';
export const REMOVE_WATCHLISTITEM = 'REMOVE_WATCHLISTITEM';

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


export const makeTransaction = (transaction) => dispatch => {
    return APITransaction.makeTransaction(transaction)
        .then((data) => dispatch(receiveTransaction(data)))
        .then(location.reload(), 3000)
};

export const fetchWatchListItems = () => dispatch => {
    return APITransaction.fetchWatchListItems()
        .then((items) => dispatch(receiveWatchListItems(items)))
}

export const addWatchListItem = (symbol) => dispatch => {
    return APITransaction.addWatchListItem(symbol) 
        .then((data) => dispatch(receiveWatchListItem(data)))
        // .then(location.reload(), 3000)
};

export const deleteWatchListItem = (id) => dispatch => {
    return APITransaction.deleteWatchListItem(id)
        .then(() => dispatch(removeWatchListItem(id)))
        // .then(location.reload(), 3000)
}

