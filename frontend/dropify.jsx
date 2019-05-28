import React from 'react';
import ReactDOM from 'react-dom';
import { login } from "./util/session_api_util";
import configureStore from './store/store';

document.addEventListener('DOMContentLoaded', () => {
    let store = configureStore();
    const root = document.getElementById('root');

    window.login = login;
    window.getState = store.getState;
    window.dispatch = store.dispatch;

    ReactDOM.render(<h1 store={store}>Dropify</h1>, root);
});