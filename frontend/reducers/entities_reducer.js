
import { combineReducers } from "redux";

import usersReducer from "./users_reducer";
import stocksReducer from "./stocks_reducer";
import newsReducer from './news_reducer';
import graphsReducer from './graphs_reducer';
import companyInfoReducer from './company_info_reducer'
import transactionsReducer from './transactions_reducer';
import portfolioReducer from './portfolio_reducer';
import ohlcsReducer from './ohlcs_reducer'

const entitiesReducer = combineReducers({
    users: usersReducer,
    stocks: stocksReducer,
    news: newsReducer,
    companyInfo: companyInfoReducer,
    graphs: graphsReducer,
    transactions: transactionsReducer,
    portfolio: portfolioReducer,
    ohlcs: ohlcsReducer
});

export default entitiesReducer;