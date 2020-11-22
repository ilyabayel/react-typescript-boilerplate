export const SET_COUNTER = 'SET_COUNTER';
export const INCREASE = 'INCREASE';
export const DECREASE = 'DECREASE';

export type Counter = {
  count: number;
};

export type CounterState = Counter;

interface SetCounter {
  type: typeof SET_COUNTER;
  payload: number;
}

interface Increment {
  type: typeof INCREASE;
  payload: number;
}

interface Decrement {
  type: typeof DECREASE;
  payload: number;
}

export type CounterActionTypes = SetCounter | Increment | Decrement;
