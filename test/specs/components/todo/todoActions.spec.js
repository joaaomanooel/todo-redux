import addTodo from '../../../../src/components/todo/todoAction';
import types from '../../../../src/components/todo/actionsTypes';

describe('Todo Actions', () => {
  it('Should must to return the expected value', () => {
    const expectedResult = {
      type: types.ADD_TODO,
      payload: 'test',
    };

    expect(addTodo('test')).toEqual(expectedResult);
  });
});
