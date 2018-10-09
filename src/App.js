import React, { Component } from 'react';
import { Provider } from 'react-redux';
import store from "./store";

import TodoList from './todo/TodoList';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div>
          <TodoList></TodoList>
        </div>
      </Provider>
    );
  }
}

export default App;
