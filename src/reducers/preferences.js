const initialState = {
  lights: false,
  color: '#0ff',
  temp: 0,
  connected: false
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
  default:
    return state;
  }
}
