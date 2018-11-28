import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as todoActions from './todoAction';

class TodoList extends Component {
  state = {
    newTodoText: '',
  }

  addNewTodo = () => {
    this.props.addTodo(this.state.newTodoText);
    this.setState({ newTodoText: '' });
  };

  render() {
    return (
      <div>
        <ul>
          {this.props.todos.map(todo => (
            <li key={todo.id} >{todo.text}</li>
          ))}
        </ul>
        <input
          type="text"
          value={this.state.newTodoText}
          onChange={e => this.setState({ newTodoText: e.target.value })}
        />
        <button onClick={this.addNewTodo}>Novo todo</button>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  todos: state.todo,
});
const mapDispatchToProps = dispatch => bindActionCreators(todoActions, dispatch);
export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
