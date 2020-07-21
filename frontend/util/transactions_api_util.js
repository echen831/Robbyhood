
export const makeTransaction = (transaction) => {
    return $.ajax({
        url: '/api/transactions',
        method: 'POST',
        data: { transaction }
    })
};

export const fetchWatchListItems = () => {
    return $.ajax({
        url: '/api/watch_list_items',
        method: 'GET'
    })
};

export const addWatchListItem = (data) => {
    return $.ajax({
        url: '/api/watch_list_items',
        method: 'POST',
        data: { data }
    })
};

export const deleteWatchListItem = (id) => {
    return $.ajax({
        url: `/api/watch_list_items/${id}`,
        method: 'DELETE',
    })
}