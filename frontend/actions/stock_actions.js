import * as StockAPIUtil from '../util/stock_api_util';

export const RECEIVE_STOCKS = 'RECEIVE_STOCKS';
export const RECEIVE_ONE_STOCK = 'RECEIVE_ONE_STOCK';
export const LOADING_STOCK = 'LOADING_STOCK';
export const RECEIVE_HIGH_LOW = 'RECEIVE_HIGH_LOW';

const receiveStocks = (stocks) => ({
    type: RECEIVE_STOCKS,
    stocks
});

const receiveOneStock = (stock, symbol) => ({
    type: RECEIVE_ONE_STOCK,
    stock,
    symbol
});

const loadingStock = () => ({
    type: LOADING_STOCK
})

const receiveHighLow = (stock, symbol) => ({
    type: RECEIVE_HIGH_LOW,
    stock,
    symbol
})

export const fetchStocks = () => dispatch => (
    StockAPIUtil.fetchStocks()
        .then((stocks) => dispatch(receiveStocks(stocks)))
);

export const fetchIntraDayStock = (symbol) => dispatch => {
    return StockAPIUtil.fetchIntraDayStock(symbol)
        .then((stock) => dispatch(receiveOneStock(stock,symbol)))
};

export const fetchHistStock = (symbol, range) => dispatch => {
    dispatch(loadingStock())
    return StockAPIUtil.fetchHistStock(symbol, range)
        .then((stock) => dispatch(receiveOneStock(stock, symbol)))
};

export const fetchHighLow = (symbol) => dispatch => {
    return StockAPIUtil.fetchHighLow(symbol)
        .then((stock) => dispatch(receiveHighLow(stock, symbol)))
}