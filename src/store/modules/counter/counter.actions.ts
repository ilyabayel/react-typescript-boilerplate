import {CounterActionTypes, DECREASE, INCREASE, SET_COUNTER} from './counter.types';

function setCounter(counter: number): CounterActionTypes {
  return {
    type: SET_COUNTER,
    payload: counter
  };
}

function increase(count: number): CounterActionTypes {
  return {
    type: INCREASE,
    payload: count
  };
}

function decrease(count: number): CounterActionTypes {
  return {
    type: DECREASE,
    payload: count
  };
}

export const counterActions = {
  setCounter,
  increase,
  decrease
};
