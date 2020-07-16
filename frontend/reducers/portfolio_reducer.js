import { combineReducers } from "redux";

import portfolioStocksReducer from './portfolio_stocks_reducer'


const portfolioReducer = combineReducers({
    stocks: portfolioStocksReducer
});

export default portfolioReducer;