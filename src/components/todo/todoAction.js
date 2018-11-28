import types from './actionsTypes';

function addTodo(payload) {
  return {
    type: types.ADD_TODO,
    payload,
  };
}

export {
  addTodo,
};
