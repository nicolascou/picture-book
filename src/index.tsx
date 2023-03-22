import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { store } from './app/store';
import './css/styles.css';

import Router from './router';

const container = document.getElementById('root')!;
const root = createRoot(container);

root.render(
  <>
    <Provider store={store}>
      <Router />
    </Provider>
  </>
);
