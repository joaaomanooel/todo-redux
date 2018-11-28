/* eslint-disable class-methods-use-this */
import React, { Component } from 'react';
import { Provider } from 'react-redux';
import store from './store';
import Counter from '../components/counter/counter';
import TodoList from '../components/todo/todoList';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div>
          <TodoList />
          <Counter />
        </div>
      </Provider>
    );
  }
}

export default App;
