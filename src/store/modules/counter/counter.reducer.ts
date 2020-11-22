import {Counter, CounterActionTypes, SET_COUNTER, INCREASE, DECREASE} from './counter.types';

const defaultState: Counter = {
  count: 0
};

export function counterReducer(state = defaultState, action: CounterActionTypes): Counter {
  switch (action.type) {
    case SET_COUNTER:
      return {count: action.payload};
    case INCREASE:
      return {count: state.count + action.payload};
    case DECREASE:
      return {count: state.count - action.payload};
    default:
      return {...state};
  }
}
