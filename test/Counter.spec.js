import { shallow } from 'enzyme';
import React from 'react';
import configureStore from 'redux-mock-store';
import Counter from '../src/todo/Counter';

const mockStore = configureStore();
const initialState = {
  todos: [
    { id: 0, text: 'Todo 1' },
    { id: 1, text: 'Todo 2' },
    { id: 2, text: 'Todo 3' },
  ]
};

const store = mockStore(initialState);
describe('Testing App component', () => {
  it('Should render correctly', () => {
    const wrapper = shallow(
      <Counter />,
      { context: { store } }
    );

    expect(wrapper).toMatchSnapshot();
    wrapper.setProps({ todo: [1, 2, 3] });
    expect(wrapper).toMatchSnapshot();
  })
});
