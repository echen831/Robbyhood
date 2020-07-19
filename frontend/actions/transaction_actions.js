import * as APITransaction from '../util/transactions_api_util';

export const RECEIVE_TRANSACTION = 'RECEIVE_TRANSACTION';
export const RECEIVE_WATCHLISTITEM = 'RECEIVE_WATCHLISTITEM';
export const REMOVE_WATCHLISTITEM = 'REMOVE_WATCHLISTITEM';

const receiveTransaction = (data) => ({
    type: RECEIVE_TRANSACTION,
    data
});

const receiveWatchListItem = (data) => ({
    type: RECEIVE_WATCHLISTITEM,
    data
});

const removeWatchListItem = () => ({
    type: REMOVE_WATCHLISTITEM,
})


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

export const deleteWatchListItem = (id) => dispatch => {
    return APITransaction.deleteWatchListItem(id)
        .then(() => dispatch(removeWatchListItem()))
        .then(location.reload(), 3000)
}

