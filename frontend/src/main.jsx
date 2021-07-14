import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { registerSW } from 'virtual:pwa-register';

import App from './App';
import './styles/main.css';
import 'sweetalert2/dist/sweetalert2.min.css';

import store from './redux/store';
import { Provider } from 'react-redux';

import { PersistGate } from "redux-persist/integration/react";
import { persistStore } from "redux-persist";

ReactDOM.render(
    <Provider store={store}>
        <PersistGate persistor={persistStore(store)}>
            <BrowserRouter>
                <App />
            </BrowserRouter>
        </PersistGate>
    </Provider>,
    document.getElementById('root')
); registerSW();