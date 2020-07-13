

export const makeTransaction = (data) => {
    return $.ajax({
        url: '/api/transactions',
        method: 'POST',
        data: { data }
    })
}