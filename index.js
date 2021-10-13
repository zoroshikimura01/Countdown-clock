import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import App from './App';
import './index.css';
import thunk from 'redux-thunk';
import { createLogger } from 'redux-logger';
import { Provider } from 'react-redux';
import rootReducer from './reducers';

const middleware = [thunk];
if (process.env.NODE_ENV !== 'production') {
  middleware.push(createLogger());
}

const store = createStore(
  rootReducer,
  applyMiddleware(...middleware)
)

ReactDOM.render(
  <Provider store={store}>
  <React.StrictMode>
    <App />
  </React.StrictMode>
  </Provider>
  ,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
