import { combineReducers } from 'redux';
import { routeReducer } from 'react-router-redux';
import { reducer as formReducer } from 'redux-form';
import { preferences } from './preferences';

const rootReducer = combineReducers({
  form: formReducer,
  routing: routeReducer,
  preferences
});

export default rootReducer;
