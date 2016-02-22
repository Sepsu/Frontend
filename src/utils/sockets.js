import env from "../config";
import io from "socket.io-client"
import {setState} from 'actions/preferences';

export default class Sockets {

  constructor(store) {
    this.store = store;
    const socket = io(`${env.apiHost}:${env.apiPort}`);

    socket.on('connect', function() {
      console.log("socket.io connected");
      socket.emit('conn', { foo: 666 });
    });

    socket.on('state', (state) => {
      console.log("received new state", state);
      //this.store.dispatch(setState(state));
    });
  }
  send(channel, data) {
    console.log("sending");
  }
}
