// Styles
import './global/scss/index.scss';

// SVG Sprite
const files = require.context('./global/icons', true, /^\.\/.*\.svg/);
files.keys().forEach(files);

// Application
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import store from './store';

import App from './components/App/App';

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('puzzle-app-root')
);
