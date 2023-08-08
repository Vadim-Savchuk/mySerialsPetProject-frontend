import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './app/App';

import store from './redux/store';
import { Provider } from 'react-redux';

import './styles/global.scss';

const root = ReactDOM.createRoot(
    document.getElementById('root')
);
root.render(
    <Provider store={store}>
        <App />
    </Provider>
);

