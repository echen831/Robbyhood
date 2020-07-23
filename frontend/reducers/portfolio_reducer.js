import { combineReducers } from "redux";

import portfolioStocksReducer from './portfolio_stocks_reducer'
import ohlcsReducer from './ohlcs_reducer';
import watchListItemsReducer from './watchlistitems_reducer'

const portfolioReducer = combineReducers({
    stocks: portfolioStocksReducer,
    ohlcs: ohlcsReducer,
    watchListItems: watchListItemsReducer
});

export default portfolioReducer;