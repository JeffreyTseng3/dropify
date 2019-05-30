import React from 'react';
import ReactDOM from 'react-dom';
import { login } from "./util/session_api_util";
import configureStore from './store/store';
import Root from './components/root';

document.addEventListener('DOMContentLoaded', () => {
    const root = document.getElementById('root');
    
    let preloadedState = undefined;
    if (window.currentUser) {
        preloadedState = {
            session: {
                currentUserId: window.currentUser.id
            }
        };
    }
    
    let store = configureStore(preloadedState);
    window.store = store;
    window.getState = store.getState();
    ReactDOM.render(<Root store={store} />, root);
});