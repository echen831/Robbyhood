import * as APITransaction from '../util/transactions_api_util'

export const RECEIVE_TRANSACTION = 'RECEIVE_TRANSACTION'

const receiveTransaction = (data) => ({
    type: RECEIVE_TRANSACTION,
    data
})


export const makeTransaction = (transaction) => dispatch => {
    return APITransaction.makeTransaction(transaction)
        .then((data) => dispatch(receiveTransaction(data)))
        .then(location.reload(), 3000)
}
