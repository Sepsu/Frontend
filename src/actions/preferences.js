export function setState(data) {
  return {
    type: 'SET_STATE',
    state: data
  }
}

export function setBrightness(value) {
  return {
    type: 'SET_BRIGHTNESS',
    value: value
  }
}

export function setLights(val) {
 	return {
 		type: 'SET_LIGHTS',
    value: val
  };
}
export function setTemp(val) {
  return {
    type: 'SET_TEMP',
    value: val
  };
}
export function setColor(val) {
  return {
    type: 'SET_COLOR',
    color: val
  };
}
export function connectBubble(val) {
  return {
    type: 'CONNECT_BUBBLE',
    value: val
  };
}
