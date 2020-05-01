import * as StockAPIUtil from '../util/stock_api_util';

export const RECEIVE_STOCKS = 'RECEIVE_STOCKS';
export const RECEIVE_ONE_STOCK = 'RECEIVE_ONE_STOCK';

const receiveStocks = (stocks) => ({
    type: RECEIVE_STOCKS,
    stocks
});

const receiveOneStock = (stock, symbol) => ({
    type: RECEIVE_ONE_STOCK,
    stock,
    symbol
});

export const fetchStocks = () => dispatch => (
    StockAPIUtil.fetchStocks()
        .then((stocks) => dispatch(receiveStocks(stocks)))
);

export const fetchIntraDayStock = (symbol) => dispatch => {
    return StockAPIUtil.fetchIntraDayStock(symbol)
        .then((stock) => dispatch(receiveOneStock(stock,symbol)))
};