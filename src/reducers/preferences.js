import {socket} from "../index";

const _ = require('lodash');
const MAX_TEMPS = 20;

const initialState = {
  lights: false,
  color: '#0ff',
  connected: false,
  free: [],
  temps: [21, 24, 22, 19, 18, 16, 18, 20, 21, 19, 17, 18, 23, 25, 28, 25, 12, 25],
  humidity: [5, 5, 5, 19, 8, 6, 8, 0, 1, 9, 7, 8, 3, 5, 5, 5, 5, 25]
};

export function preferences(state = initialState, action) {
  switch (action.type) {

  case 'SET_STATE':
    console.log("setstate", action.state);
    return Object.assign({}, state, action.state);

  case 'SET_LIGHTS':
    socket.emit('command', { command : 'lights', value  : action.value});
    console.log("setlight", action.value);
    return {
      ...state,
      lights: action.value
    };
  case 'SET_BRIGHTNESS':
    socket.emit('command', { command : 'brightness', value : action.value});
    return {
      ...state,
      brightness: action.value
    };
  case 'SET_COLOR':
   socket.emit('command', { command : 'color', value : action.color});
    return {
      ...state,
      color: action.color
    };
  case 'SET_TEMP':
    return {
      ...state,
      temps: _.takeRight(_.concat(state.temps, action.value), MAX_TEMPS)
    };
  case 'CONNECT_BUBBLE':
    socket.emit('connectBubble', action.value);
      return state;
  default:
    return state;
  }
}
