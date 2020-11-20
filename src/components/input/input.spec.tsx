import React, {ChangeEvent} from 'react';
import {mount, ReactWrapper} from 'enzyme';
import {Input, InputProps} from 'components/input/input';

const setup = (props?: InputProps) => mount(<Input {...props} />);
const findByTestAttr = (wrapper: ReactWrapper, value: string) => {
  return wrapper.find(`[data-test="${value}"]`);
};

describe('Input', () => {
  it('should render without errors', () => {
    const wrapper = setup();
    const input = findByTestAttr(wrapper, 'input-component');
    expect(input.length).toBe(1);
  });

  it('should have right value', () => {
    const wrapper = setup({value: 'input test', onChange: () => null});
    const value = findByTestAttr(wrapper, 'input-component').props().value;
    expect(value).toBe('input test');
  });

  it('should change value', () => {
    let value = 'input-component';
    const onChange = (e: ChangeEvent<HTMLInputElement>) => {
      value = e.target.value;
    };
    const wrapper = setup({value, onChange});
    const input = findByTestAttr(wrapper, 'input-component');
    input.simulate('change', {target: {value: 'hello'}});
    expect(value).toBe('hello');
  });

  it('should handle onBlur', () => {
    let value = 'input-component';
    const onBlur = () => {
      value = 'after blur';
    };
    const wrapper = setup({onBlur});
    const input = findByTestAttr(wrapper, 'input-component');
    input.simulate('blur');
    expect(value).toBe('after blur');
  });
});
