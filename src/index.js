import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Router, Redirect, useRouterHistory } from 'react-router';
import { createHashHistory } from 'history';
import configureStore from './store/configureStore';
import routes from './routes';

import env from "./config";
import io from "socket.io-client"
import {setState, setTemp} from 'actions/preferences';

const socket = io(`${env.apiHost}:${env.apiPort}`);
const history = useRouterHistory(createHashHistory)({ queryKey: false });
const store = configureStore(history, socket);

socket.on('connect', function() {
  console.log("socket.io connected");
  socket.emit('conn', { foo: 666 });
});

socket.on('state', (state) => {
  console.log("received new state", state);
  store.dispatch(setState(state));
});
socket.on('temp', (state) => {
  console.log("received new temp", state);
  store.dispatch(setTemp(state));
});

ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      <Redirect from="/" to="home" />
      {routes}
    </Router>
  </Provider>,
  document.getElementById('root')
);
