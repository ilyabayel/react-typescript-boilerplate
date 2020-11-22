import React from 'react';
import {shallow, ShallowWrapper} from 'enzyme';
import {App} from './app';
import {CounterActionTypes} from './store/modules/counter/counter.types';

const findByTestAttr = (wrapper: ShallowWrapper, value: string) => {
  return wrapper.find(`[data-test="${value}"]`);
};

const initialState = {
  counter: {
    count: 0
  }
};

const actionQueue = [];

jest.mock('react-redux', () => ({
  useDispatch: jest.fn(() => (action: CounterActionTypes) => actionQueue.push(action)),
  useSelector: jest.fn((fn) => fn(initialState))
}));

describe('App component', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<App />);
    while (actionQueue.length > 0) {
      actionQueue.pop();
    }
  });
  it('should render without errors', () => {
    const app = findByTestAttr(wrapper, 'app-component');
    expect(app.length).toBe(1);
  });

  it('should render counter component', () => {
    const counter = findByTestAttr(wrapper, 'app-counter');
    expect(counter.length).toBe(1);
  });

  it('should render increase button', () => {
    const button = findByTestAttr(wrapper, 'increase-button');
    expect(button.length).toBe(1);
  });

  it('should render decrease button', () => {
    const button = findByTestAttr(wrapper, 'decrease-button');
    expect(button.length).toBe(1);
  });

  it('should render input', () => {
    const counter = findByTestAttr(wrapper, 'app-component');
    expect(counter.length).toBe(1);
  });

  it('should render counter', () => {
    const counter = findByTestAttr(wrapper, 'app-counter');
    expect(counter.text()).toBe('0');
  });

  it('should react increase btn', () => {
    const increaseBtn = findByTestAttr(wrapper, 'increase-button');
    increaseBtn.simulate('click');
    expect(actionQueue[0].type).toBe('INCREASE');
  });

  it('should react decrease btn', () => {
    const increaseBtn = findByTestAttr(wrapper, 'decrease-button');
    increaseBtn.simulate('click');
    expect(actionQueue[0].type).toBe('DECREASE');
  });
});
