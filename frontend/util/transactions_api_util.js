
export const makeTransaction = (transaction) => {
    return $.ajax({
        url: '/api/transactions',
        method: 'POST',
        data: { transaction }
    })
}