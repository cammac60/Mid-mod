import React from 'react';
import ReactDOM from 'react-dom';
import Card from './card';
import { shallow } from 'enzyme';

describe('Card', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<Card />)
  });

  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });
  
});
