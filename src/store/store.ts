import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import {composeWithDevTools} from 'redux-devtools-extension';
import {reducers} from './reducers';
import {CounterState} from './modules/counter/counter.types';

export type RootState = {
  counter: CounterState;
};

export const store = createStore(reducers, composeWithDevTools(applyMiddleware(thunk)));
