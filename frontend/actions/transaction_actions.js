import * as APITransaction from '../util/transactions_api_util'

export const RECEIVE_TRANSACTION = 'RECEIVE_TRANSACTION'

const receiveTransaction = (data) => ({
    type: RECEIVE_TRANSACTION,
    data
})


export const makeTransaction = (transaction) => {
    return APITransaction.makeTransaction(transaction)
        .then((transaction) => dispatch(receiveTransaction(transaction)))    
}
