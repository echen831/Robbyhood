
export const fetchStocks = () => (
    $.ajax({
        url: '/api/stocks',
        method: 'GET'
    })
);

export const fetchIntraDayStock = (symbol) => (
    $.ajax({
        url: `https://sandbox.iexapis.com/stable/stock/${symbol}/intraday-prices?token=${window.iexAPIKey}`,
        method: 'GET'
    })
);

export const fetchHistStock = (symbol,range) => (
    $.ajax({
        url: `https://sandbox.iexapis.com/stable/stock/${symbol}/chart/${range}?token=${window.iexAPIKey}`,
        method: 'GET'
    })
);


export const fetchNews = (symbol) => (
    $.ajax({
        url: `https://sandbox.iexapis.com/stable/stock/${symbol}/news/last/${5}?token=${window.iexAPIKey}`,
        method: 'GET'
    })
)

export const fetchCompanyInfo = (symbol) => (
    $.ajax({
        url: `https://sandbox.iexapis.com/stable/stock/${symbol}/company?token=${window.iexAPIKey}`,
        method: 'GET'    
    })
)
