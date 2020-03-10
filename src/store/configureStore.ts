import { createStore, compose, applyMiddleware } from 'redux';
import { rootReducer } from '../reducers/rootReducer';
import { logger } from 'redux-logger';
import thunk from 'redux-thunk';
import freeze from 'redux-freeze';
// import { createBrowserHistory } from 'history';
// import { routerMiddleware } from 'connected-react-router';

export const store = createStore(
  rootReducer,
  compose(applyMiddleware(thunk, freeze, logger))
);
//export const store = createStore(rootReducer);
