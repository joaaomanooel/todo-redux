import types from './actionsTypes';

export default function todos(state = [], action) {
  switch (action.type) {
    case types.ADD_TODO:
      return [...state, {
        id: Math.random(),
        text: action.payload,
      }];
    default:
      return state;
  }
}
