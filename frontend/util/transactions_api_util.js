

export const buyStock = (data) => {
    return $.ajax({
        url: '/api/transactions',
        method: 'POST',
        data: { data }
    })
}