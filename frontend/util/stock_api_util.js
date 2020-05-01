
export const fetchStocks = () => (
    $.ajax({
        url: '',
        method: 'GET'
    })
);

export const fetchIntraDayStock = (symbol) => (
    $.ajax({
        url: `https://sandbox.iexapis.com/stable/stock/${symbol}/intraday-prices?token=${window.iexAPIKey}`,
        method: 'GET'
    })
);