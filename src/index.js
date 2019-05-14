import { BrowserRouter as Router } from 'react-router-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import React from 'react';
import ReactDOM from 'react-dom';
import { Reducers } from './root.reducer';
import thunk from "redux-thunk";

import Home from './components/Home';

const element = document.getElementById('root');
// const store = createStore(rootReducers, {}, applyMiddleware(thunk));
// export const Store = createStore(Reducers, {}, applyMiddleware(thunk));

ReactDOM.render(
  <Provider store={createStore(Reducers, {}, applyMiddleware(thunk))}>
    <Router>
      <Home />
    </Router>
  </Provider>,
element)