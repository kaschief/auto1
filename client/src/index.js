import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';

import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import { Provider } from 'react-redux';

import reducer from './store/reducer';

const store = createStore(reducer);

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <App />
    </Router>
  </Provider>,

  document.getElementById('root')
);

serviceWorker.unregister();
