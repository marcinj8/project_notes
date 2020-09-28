import React from 'react';
import ReactDOM from 'react-dom';

import { Provider } from 'react-redux';
import thunkMiddleware from 'redux-thunk';
import { createLogger } from 'redux-logger';
import { createStore, applyMiddleware } from 'redux';
import { rootReducer } from './Data/Store/Reducers'
import * as serviceWorker from './serviceWorker';
import { composeWithDevTools } from 'redux-devtools-extension';

import { ReactQueryConfigProvider } from 'react-query'

import App from './App';

import './index.css';
import { ThemeProvider } from 'styled-components';
import { theme } from './Utils';

const loggerMiddleware = createLogger();

const store = createStore(
  rootReducer,
  // applyMiddleware() tells createStore() how to handle middleware
  composeWithDevTools(applyMiddleware(thunkMiddleware, loggerMiddleware)) // czy to jest potrzebne
  // applyMiddleware(thunkMiddleware, loggerMiddleware)
)

ReactDOM.render(
  <ReactQueryConfigProvider>
    <React.StrictMode>
      <ThemeProvider theme={theme} >
        <Provider store={store}>
          <App />
        </Provider>
      </ThemeProvider>
    </React.StrictMode>
  </ReactQueryConfigProvider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
