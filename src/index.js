import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { Provider } from "react-redux"
import { createStore, applyMiddleware, compose } from "redux"
import { createLogger } from "redux-logger"
import ReduxThunk from "redux-thunk"
import { LoanApply } from './reducers/index';

const devTools =
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
// const devTools =
//   window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();

const logger = createLogger();

export const store = createStore(LoanApply, devTools(applyMiddleware(logger, ReduxThunk)))
console.log(store.getState())

ReactDOM.render(
<Provider store={store}>
    <App /> 
</Provider>
, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
