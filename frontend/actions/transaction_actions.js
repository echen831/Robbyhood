import * as APITransaction from '../util/transactions_api_util'

export const RECEIVE_TRANSACTION = 'RECEIVE_TRANSACTION'

const receiveTransaction = (transaction) => ({
    type: RECEIVE_TRANSACTION,
    transaction
})


export const makeTransaction = (transaction) => {
    return APITransaction.makeTransaction(transaction)
        .then((transaction) => dispatch(receiveTransaction(transaction)))
        .then(location.reload(), 3000)   
}
