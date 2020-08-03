
export const fetchStocks = () => (
    $.ajax({
        url: '/api/stocks',
        method: 'GET'
    })
);

// Alpha Advantage Call
export const fetchStocksAndSymbols = (keyword) => (
    $.ajax({
        url: `https://www.alphavantage.co/query?function=SYMBOL_SEARCH&keywords=${keyword}&apikey=${window.avAPIKey}`,
        method: 'GET'
    })
);


// MarketStack Call
// export const fetchStocksAndSymbols = (mic) => (
//     $.ajax({
//         url: `https://api.marketstack.com/v1/exchanges/${mic}/tickers?access_key=${window.msAPIKey}`,
//         method: 'GET'
//     })
// );

export const fetchIntraDayStock = (symbol) => (
    $.ajax({
        url: `https://sandbox.iexapis.com/stable/stock/${symbol}/intraday-prices?token=${window.iexAPIKey}`,
        method: 'GET'
    })
);

export const fetchHistStock = (symbol,range) => {

    let cloud = `https://cloud.iexapis.com/stable/stock/${symbol}/chart/${range}?token=${window.iex2APIKey}`
    let sandbox = `https://sandbox.iexapis.com/stable/stock/${symbol}/chart/${range}?token=${window.iexAPIKey}`

   return $.ajax({
        // url: process.env.NODE_ENV !== "production" ? sandbox : cloud,
        url: sandbox,
        method: 'GET'
    })
};


export const fetchNews = (symbol) => {

    let cloud = `https://cloud.iexapis.com/stable/stock/${symbol}/news/last/${3}?token=${window.iex2APIKey}`
    let sandbox = `https://sandbox.iexapis.com/stable/stock/${symbol}/news/last/${3}?token=${window.iexAPIKey}`
    return $.ajax({
        // url: `https://cloud.iexapis.com/stable/stock/${symbol}/news/last/${3}?token=${window.iex2APIKey}`,
        // url: `https://sandbox.iexapis.com/stable/stock/${symbol}/news/last/${5}?token=${window.iexAPIKey}`,
        url: process.env.NODE_ENV !== "production" ? sandbox : cloud,
        method: 'GET'
    })
};

export const fetchCompanyInfo = (symbol) => {

    let cloud = `https://cloud.iexapis.com/stable/stock/${symbol}/company?token=${window.iex2APIKey}`
    let sandbox = `https://sandbox.iexapis.com/stable/stock/${symbol}/company?token=${window.iexAPIKey}`

    return $.ajax({
        // url: `https://cloud.iexapis.com/stable/stock/${symbol}/company?token=${window.iex2APIKey}`,
        // url: `https://sandbox.iexapis.com/stable/stock/${symbol}/company?token=${window.iexAPIKey}`,
        url: process.env.NODE_ENV !== "production" ? sandbox : cloud,
        method: 'GET'    
    })
};


export const fetchOHLC = (symbol) => (
    $.ajax({
        url: `https://sandbox.iexapis.com/stable/stock/${symbol}/previous?token=${window.iexAPIKey}`,
        method: 'GET'
    })
);

export const fetchMultiStocks = (symbols, range) => {

    let cloud = `https://cloud.iexapis.com/stable/stock/market/batch?symbols=${symbols}&types=chart&range=${range}&token=${window.iex2APIKey}`
    let sandbox = `https://sandbox.iexapis.com/stable/stock/market/batch?symbols=${symbols}&types=chart&range=${range}&token=${window.iexAPIKey}`
    return $.ajax({
        // url: process.env.NODE_ENV !== "production" ? sandbox : cloud,
        url: sandbox,
        method: 'GET'
    })
};

export const fetchMultiNews = (symbols) => {
    let sandbox = `https://sandbox.iexapis.com/stable/stock/market/batch?symbols=${symbols}&types=news&last=3&token=${window.iexAPIKey}`
    let cloud = `https://cloud.iexapis.com/stable/stock/market/batch?symbols=${symbols}&types=news&last=3&token=${window.iex2APIKey}`
    return $.ajax({
        url: process.env.NODE_ENV !== "production" ? sandbox : cloud,
        method: 'GET'
    })
};
