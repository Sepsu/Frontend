const _ = require('lodash');
const MAX_TEMPS = 20;

const initialState = {
  lights: false,
  color: '#0ff',
  connected: false,
  temps: [21, 24, 22, 19, 18, 16, 18, 20, 21, 19, 17, 18, 23, 25, 28, 25, 12, 25]
};

export function preferences(state = initialState, action) {
  switch (action.type) {

  case 'SET_STATE':
    console.log("setstate", action.state);
    return Object.assign({}, state, action.state);

  case 'SET_LIGHTS':
    console.log("setlight", action.value);
    return {
      ...state,
      lights: action.value
    };
  case 'SET_BRIGHTNESS':
    return {
      ...state,
      brightness: action.value
    };
  case 'SET_COLOR':
    return {
      ...state,
      color: action.color
    };
  case 'SET_TEMP':
    return {
      ...state,
      temps: _.takeRight(_.concat(state.temps, action.value), MAX_TEMPS)
    };
  default:
    return state;
  }
}
