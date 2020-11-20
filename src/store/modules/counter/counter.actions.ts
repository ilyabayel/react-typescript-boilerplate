import {CounterActionTypes, DECREMENT, INCREMENT, SET_COUNTER} from './counter.types';

function setCounter(counter: number): CounterActionTypes {
  return {
    type: SET_COUNTER,
    payload: counter
  };
}

function increment(count: number): CounterActionTypes {
  return {
    type: INCREMENT,
    payload: count
  };
}

function decrement(count: number): CounterActionTypes {
  return {
    type: DECREMENT,
    payload: count
  };
}

export const counterActions = {
  setCounter,
  increment,
  decrement
};
