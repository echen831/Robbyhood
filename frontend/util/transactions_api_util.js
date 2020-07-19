
export const makeTransaction = (transaction) => {
    return $.ajax({
        url: '/api/transactions',
        method: 'POST',
        data: { transaction }
    })
};

export const addWatchListItem = (data) => {
    return $.ajax({
        url: '/api/watch_list_items',
        method: 'POST',
        data: { data }
    })
};

export const deleteWatchListItem = () => {
    return $.ajax({
        url: '/api/watch_list_items',
        method: 'DELETE'
    })
}