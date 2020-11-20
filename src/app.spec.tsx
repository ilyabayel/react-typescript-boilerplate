import React from 'react';
import {mount, ReactWrapper} from 'enzyme';
import {App} from './app';

const setup = () => mount(<App />);

const findByTestAttr = (wrapper: ReactWrapper, value: string) => {
  return wrapper.find(`[data-test="${value}"]`);
};

describe('App component', () => {
  it('should render without errors', () => {
    const wrapper = setup();
    const app = findByTestAttr(wrapper, 'app-component');
    expect(app.length).toBe(1);
  });

  it('should render counter', () => {
    const wrapper = setup();
    const counter = findByTestAttr(wrapper, 'app-counter');
    expect(counter.length).toBe(1);
  });
});
