import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { shallow } from 'enzyme';

describe('App', () => {
  let wrapper, defaultState;

  beforeEach(() => {
    wrapper = shallow(<App />);
    defaultState = {
      reservations: [],
      name: '',
      date: '',
      time: '',
      number: ''
    }
  });

  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<App />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should have default state upon mounting', () => {
    expect(wrapper.state()).toEqual(defaultState);
  });

  
});
