// @flow
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import App from './App';

import ViewStore from './store/ViewStore';
import UiStore from './store/UiStore';
import { fetchAPI } from './api/fetchAPI';
import reportWebVitals from './reportWebVitals';

const viewStore = new ViewStore(fetchAPI);
const uiStore = new UiStore();

ReactDOM.render(
  <BrowserRouter>
    <App viewStore={viewStore} uiStore={uiStore} />
  </BrowserRouter>,
  document.getElementById('root'),
);

reportWebVitals();
