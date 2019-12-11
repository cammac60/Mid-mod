import React from 'react';
import ReactDOM from 'react-dom';
import Nav from './Nav';
import { shallow } from 'enzyme';

describe('Nav', () => {
  let wrapper;
  const click = jest.fn();
  const change = jest.fn();

  beforeEach(() => {
    wrapper = shallow(<Nav change={change} click={click}/>);
  });

  it('should call the click method when the button is clicked', () => {
    wrapper.find('.form-submit').simulate('click');
    expect(click.mock.calls.length).toEqual(1);
  });

  it('should call the change method when an input value is changed', () => {
    wrapper.find('#name').simulate('change');
    expect(change.mock.calls.length).toEqual(1);
  });

  
});
