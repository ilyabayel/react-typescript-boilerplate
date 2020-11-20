import {combineReducers} from 'redux';
import {counterReducer} from './modules/counter/counter.reducer';

export const reducers = combineReducers({
  counter: counterReducer
});
