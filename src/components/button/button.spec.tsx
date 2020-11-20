import React from 'react';
import {mount, ReactWrapper} from 'enzyme';
import {Button} from 'components/button/button';

const setup = (props?) => mount(<Button {...props} />);
const findByTestAttr = (wrapper: ReactWrapper, value: string) => {
  return wrapper.find(`[data-test="${value}"]`);
};

describe('Button', () => {
  it('should render without errors', () => {
    const wrapper = setup();
    const button = findByTestAttr(wrapper, 'button-component');
    expect(button.length).toBe(1);
  });

  it('should render button label', () => {
    const wrapper = setup({label: 'label'});
    const label = findByTestAttr(wrapper, 'button-component').text();
    expect(label).toBe('label');
  });

  it('should react on action once', () => {
    let count = 0;
    const inc = () => {
      count++;
    };
    const wrapper = setup({label: 'label', onClick: inc});
    const button = findByTestAttr(wrapper, 'button-component');
    button.simulate('click');
    expect(count).toBe(1);
  });

  it('should react on action five times', () => {
    let count = 0;
    const inc = () => {
      count++;
    };
    const wrapper = setup({label: 'label', onClick: inc});
    const button = findByTestAttr(wrapper, 'button-component');
    button.simulate('click');
    button.simulate('click');
    button.simulate('click');
    button.simulate('click');
    button.simulate('click');
    expect(count).toBe(5);
  });
});
