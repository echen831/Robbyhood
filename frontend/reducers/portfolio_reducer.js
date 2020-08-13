import { combineReducers } from "redux";

import portfolioStocksReducer from './portfolio_stocks_reducer'
import watchListItemsReducer from './watchlistitems_reducer'
import oneYearStocksReducer from './one_year_stocks_reducer'

const portfolioReducer = combineReducers({
    stocks: portfolioStocksReducer,
    watchListItems: watchListItemsReducer,
    oneYearStocks: oneYearStocksReducer
});

export default portfolioReducer;