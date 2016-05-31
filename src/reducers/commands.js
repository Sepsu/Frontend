import { socket } from '../index'

export function commands(state = initialState, action) {
  switch (action.type) {

  case 'INIT':
    console.log("setstate", action.state);
    return Object.assign({}, state, action.state);

  case 'COM_LIGHTS':
    console.log("setlight", action.value);
    socket.emit('command', {command : 'lights', data : action.value});
    return {
      ...state,
      lights: action.lights,
      brightness: action.brightness,
      color: action.color,
    };
  case 'COM_FAN':
    console.log("setfan", action.value);
    socket.emit('command', {command : 'lights', data : action.value});
    return {
      ...state,
      fan: action.fan,
    };

  case 'COM_SOUND':
  console.log("setsound", action.value);
  socket.emit('command', {command : 'sound', data : action.value});
  return {
    ...state,
    sound: action.sound,
  };
  default:
    return state;
  }
}
