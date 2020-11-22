import React, {ReactElement} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {Button} from 'components/button/button';
import {RootState} from './store/store';
import {actions} from './store/actions';

export function App(): ReactElement {
  const dispatch = useDispatch();
  const count = useSelector((state: RootState) => state.counter.count);
  const increase = (step: number) => {
    dispatch(actions.counter.increase(step));
  };
  const decrease = (step: number) => {
    dispatch(actions.counter.decrease(step));
  };
  return (
    <div className="app" data-test="app-component">
      <h1>Counter</h1>
      <p data-test="app-counter">{count}</p>
      <Button label="Increase" onClick={() => increase(1)} data-test="increase-button" />
      <Button label="Decrease" onClick={() => decrease(1)} data-test="decrease-button" />
    </div>
  );
}
