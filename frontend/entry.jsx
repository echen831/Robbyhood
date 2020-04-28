import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import Root from './components/root'

//test only

import * as Action from './actions/session_actions'

//test only

document.addEventListener('DOMContentLoaded', ()=> {
    const root = document.getElementById('root');
    const store = configureStore()
    //test 
    window.login = Action.login
    window.logout = Action.logout
    window.signup = Action.signup
    window.getState = store.getState
    window.dispatch = store.dispatch
    //test 


    ReactDOM.render(<Root store= {store}/>, root)
});