import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import { createLogger } from 'redux-logger';
import reducer from './reducers'
import thunkMiddleware from "redux-thunk";
import { fetchItems } from './actions';

const store = createStore(
    reducer,
    applyMiddleware( thunkMiddleware, createLogger() ) // Enable Redux logging which is handy for developers.
);

//store.dispatch(fetchItems());

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);
registerServiceWorker();
