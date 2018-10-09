import React, { Component } from 'react';
import { bindActionCreators } from 'redux';

import * as todoActions from '../actions/todos';

export default class TodoList extends Component {
  render() {
    return (
      <div>
        <ul>
          <li>Item do todo</li>
        </ul>

        <input type="text" />
        <button>Novo todo</button>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => bindActionCreators(todoActions, dispatch);
