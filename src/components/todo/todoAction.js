function addTodo(payload) {
  return {
    type: 'ADD_TODO',
    payload,
  };
}

export {
  addTodo,
};
