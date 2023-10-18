import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './store';
import reportWebVitals from './reportWebVitals';

import App from './App';

{/* <Provider store={store}>
    <App />
</Provider> */}
ReactDOM.render(
    <App />,
    document.getElementById('root')
)

reportWebVitals()
