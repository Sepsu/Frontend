import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { syncHistory } from 'react-router-redux';
import rootReducer from '../reducers';
import remoteActionMiddleware from '../utils/remoteActionMiddleware';

const debugware = [];
if (process.env.NODE_ENV !== 'production') {
  const createLogger = require('redux-logger');
  debugware.push(createLogger({
    collapsed: true
  }));
}

export default function configureStore(history, socket, initialState) {
  const store = createStore(
    rootReducer,
    initialState,
    applyMiddleware(thunkMiddleware, syncHistory(history), remoteActionMiddleware(socket), ...debugware)
  );

  if (module.hot) {
    // Enable Webpack hot module replacement for reducers
    module.hot.accept('../reducers', () => {
      const nextRootReducer = require('../reducers/index').default;
      store.replaceReducer(nextRootReducer);
    });
  }

  return store;
}
