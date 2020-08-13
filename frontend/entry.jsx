import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import Root from './components/root'

//test only

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

    //test 


    ReactDOM.render(<Root store= {store}/>, root)
});