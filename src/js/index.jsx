import ReactDOM from 'react-dom';
import React from 'react';
import App from './components/App';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux'
import reduxPromise from 'redux-promise'
import logger  from 'redux-logger';
import reduxThunk from 'redux-thunk'

import rootReducers from './reducers'

const store = createStore(rootReducers,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(), 
    applyMiddleware(reduxThunk, logger),
    );

ReactDOM.render(
  <Provider store = {store}>
    <App />

  </Provider>,
  
  document.querySelector('#app')
);