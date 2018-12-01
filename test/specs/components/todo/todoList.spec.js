import { shallow } from 'enzyme';
import React from 'react';
import configureStore from 'redux-mock-store';
import TodoList from '../../../../src/components/todo/todoList';

const mockStore = configureStore();
const initialState = {
  todo: [
    { id: 0, text: 'Todo 1' },
    { id: 1, text: 'Todo 2' },
    { id: 2, text: 'Todo 3' },
  ],
};
const store = mockStore(initialState);
describe('Testing App component', () => {
  it('Should render correctly', () => {
    const wrapper = shallow(
      <TodoList />,
      { context: { store } },
    ).dive();

    expect(wrapper).toMatchSnapshot();
  });
});
