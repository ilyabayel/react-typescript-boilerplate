import {Counter, CounterActionTypes, SET_COUNTER, INCREMENT, DECREMENT} from './counter.types';

const defaultState: Counter = {
  count: 0
};

export function counterReducer(state = defaultState, action: CounterActionTypes): Counter {
  switch (action.type) {
    case SET_COUNTER:
      return {count: action.payload};
    case INCREMENT:
      return {count: state.count + action.payload};
    case DECREMENT:
      return {count: state.count - action.payload};
    default:
      return {...state};
  }
}
