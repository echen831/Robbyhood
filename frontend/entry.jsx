import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import Root from './components/root'

//test only

// import * as Action from './actions/session_actions'
import * as Stock from './actions/stock_actions'
import * as StockUtil from './util/stock_api_util'
import * as Transaction from './actions/transaction_actions'

//test only

document.addEventListener('DOMContentLoaded', ()=> {
    const root = document.getElementById('root');
    // const store = configureStore()

    let store;
    if (window.currentUser) {
        const preloadedState = {
            entities: {
                users: { [window.currentUser.id]: window.currentUser }
            },
            session: { id: window.currentUser.id }
        };
        store = configureStore(preloadedState);
        delete window.currentUser;
    } else {
        store = configureStore();
    }
    
    //test 
    // window.login = Action.login
    // window.logout = Action.logout
    // window.signup = Action.signup
    window.getState = store.getState
    window.dispatch = store.dispatch
    // window.fetchIntraDayStock = Stock.fetchIntraDayStock    
    window.fetchHistStock = Stock.fetchHistStock
    window.fetchIntraDayStock = StockUtil.fetchIntraDayStock
    window.fetchStocks = Stock.fetchStocks
    window.fetchOHLC = Stock.fetchOHLC
    window.deleteWatchListItem = Transaction.deleteWatchListItem
    window.fetchWatchListItems = Transaction.fetchWatchListItems
    window.fetchMultiStocks = StockUtil.fetchMultiStocks
    window.fetchOneYearStock = Stock.fetchOneYearStock
    window.fetchMultiStocks = Stock.fetchMultiStocks
    //test 


    ReactDOM.render(<Root store= {store}/>, root)
});