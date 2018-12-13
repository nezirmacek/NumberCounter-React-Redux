
import React from 'react';
import ReactDOM from 'react-dom';
import App from './containers/App';
import './index.css';

// for redux
import { createStore } from 'redux'
import reducers from './reducers';
import {Provider} from 'react-redux'; //provider component

// create store
const store = createStore(reducers, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

ReactDOM.render(
  <Provider store ={store}>
    <App/>
  </Provider>,
  document.getElementById('root')
);