import * as StockAPIUtil from '../util/stock_api_util';

export const RECEIVE_STOCKS = 'RECEIVE_STOCKS';
export const RECEIVE_ONE_STOCK = 'RECEIVE_ONE_STOCK';
export const RECEIVE_ONE_DAY_STOCK = 'RECEIVE_ONE_DAY_STOCK';
export const RECEIVE_ONE_YEAR_STOCK = 'RECEIVE_ONE_YEAR_STOCK';
export const LOADING_STOCK = 'LOADING_STOCK';
export const RECEIVE_NEWS = 'RECEIVE_NEWS';
export const RECEIVE_MULTI_NEWS = 'RECEIVE_MULTI_NEWS';
export const RECEIVE_COMPANY_INFO = 'RECEIVE_COMPANY_INFO';
export const RECEIVE_OHLC = 'RECEIVE_OHLC';
export const RECEIVE_MULTI_1Y_STOCKS = 'RECEIVE_MULTI_1Y_STOCKS';
export const RECEIVE_MULTI_1D_STOCKS = 'RECEIVE_MULTI_1D_STOCKS';



const receiveStocks = (stocks) => ({
    type: RECEIVE_STOCKS,
    stocks
});

const receiveOneStock = (stock, symbol) => ({
    type: RECEIVE_ONE_STOCK,
    stock,
    symbol
});

const receiveOneDayStock = (stock, symbol) => ({
    type: RECEIVE_ONE_DAY_STOCK,
    stock,
    symbol
});

const receiveOneYearStock = (stock, symbol) => ({
    type: RECEIVE_ONE_YEAR_STOCK,
    stock,
    symbol
});

const receiveMultiOneYearStocks = (stocks, symbols) => ({
    type: RECEIVE_MULTI_1Y_STOCKS,
    stocks,
    symbols
});

const receiveMultiOneDayStocks = (stocks, symbols) => ({
    type: RECEIVE_MULTI_1D_STOCKS,
    stocks,
    symbols
})

const receiveOHLC = (data, symbol) => ({
    type: RECEIVE_OHLC,
    data,
    symbol
})


const loadingStock = () => ({
    type: LOADING_STOCK
});


const receiveNews = (news, symbol) => ({
    type: RECEIVE_NEWS,
    news,
    symbol
});

const receiveMultiNews = (news, symbols) => ({
    type: RECEIVE_MULTI_NEWS,
    news,
    symbols
})

const receiveCompanyInfo = (data, symbol) => ({
    type: RECEIVE_COMPANY_INFO,
    data,
    symbol
}) 


export const fetchStocks = () => dispatch => {
    return StockAPIUtil.fetchStocks()
        .then((stocks) => dispatch(receiveStocks(stocks)))
};


export const fetchIntraDayStock = (symbol) => dispatch => {
    return StockAPIUtil.fetchIntraDayStock(symbol)
        .then((stock) => dispatch(receiveOneStock(stock,symbol)))
};

export const fetchOneDayStock = (symbol, range) => dispatch => {
    return StockAPIUtil.fetchHistStock(symbol, range) 
        .then((stock) => dispatch(receiveOneDayStock(stock, symbol)))
};

export const fetchOneYearStock = (symbol, range) => dispatch => {
    return StockAPIUtil.fetchHistStock(symbol, range)
        .then((stock) => dispatch(receiveOneYearStock(stock, symbol)))
};

export const fetchMultiOneYearStocks = (symbols, range) => dispatch => {
    return StockAPIUtil.fetchMultiStocks(symbols, range)
        .then((stocks) => dispatch(receiveMultiOneYearStocks(stocks, symbols)))
};

export const fetchMultiOneDayStocks = (symbols, range) => dispatch => {
    return StockAPIUtil.fetchMultiStocks(symbols, range)
        .then((stocks) => dispatch(receiveMultiOneDayStocks(stocks, symbols)))
}

export const fetchHistStock = (symbol, range) => dispatch => {
    dispatch(loadingStock())
    return StockAPIUtil.fetchHistStock(symbol, range)
        .then((stock) => dispatch(receiveOneStock(stock, symbol)))
};


export const fetchNews = (symbol) => dispatch => {
    return StockAPIUtil.fetchNews(symbol)
        .then((news) => dispatch(receiveNews(news, symbol)))
};

export const fetchMultiNews = (symbols) => dispatch => {
    return StockAPIUtil.fetchMultiNews(symbols)
        .then((news) => dispatch(receiveMultiNews(news, symbols)))
};

export const fetchCompanyInfo = (symbol) => dispatch => {
    return StockAPIUtil.fetchCompanyInfo(symbol)
        .then((data) => dispatch(receiveCompanyInfo(data, symbol)))
};

export const fetchOHLC = (symbol) => dispatch => {
    return StockAPIUtil.fetchOHLC(symbol)
        .then((data) => dispatch(receiveOHLC(data, symbol)))
};