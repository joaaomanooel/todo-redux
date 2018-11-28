import types from './actionsTypes';

export default function addTodo(payload) {
  return {
    type: types.ADD_TODO,
    payload,
  };
}
