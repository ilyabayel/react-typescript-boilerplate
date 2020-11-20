export const SET_COUNTER = 'SET_COUNTER';
export const INCREMENT = 'INCREMENT';
export const DECREMENT = 'DECREMENT';

export type Counter = {
  count: number;
};

export type CounterState = Counter;

interface SetCounter {
  type: typeof SET_COUNTER;
  payload: number;
}

interface Increment {
  type: typeof INCREMENT;
  payload: number;
}

interface Decrement {
  type: typeof DECREMENT;
  payload: number;
}

export type CounterActionTypes = SetCounter | Increment | Decrement;
