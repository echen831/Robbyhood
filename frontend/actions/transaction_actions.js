import * as APITransaction from '../util/transactions_api_util'

export const RECEIVE_TRANSACTION = 'RECEIVE_TRANSACTION'
export const RECEIVE_WATCHLISTITEM = 'RECEIVE_WATCHLISTITEM'

const receiveTransaction = (data) => ({
    type: RECEIVE_TRANSACTION,
    data
});

const receiveWatchListItem = (data) => ({
    type: RECEIVE_WATCHLISTITEM,
    data
});


export const makeTransaction = (transaction) => dispatch => {
    return APITransaction.makeTransaction(transaction)
        .then((data) => dispatch(receiveTransaction(data)))
        .then(location.reload(), 3000)
};

export const addWatchListItem = (symbol) => dispatch => {
    return APITransaction.addWatchListItem(symbol) 
        .then((data) => dispatch(receiveWatchListItem(data)))
        .then(location.reload(), 3000)
};