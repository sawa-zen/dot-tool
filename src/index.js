import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import store from './store';
import Router from './router/Router';

const target = document.getElementById('root');
render(
  <Provider store={store}>
    <Router />
  </Provider>,
  target,
);
