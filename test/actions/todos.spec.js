import { addTodo } from '../../src/actions/todos';

describe('Todo Actions', () => {
  it('Should must to return the expected value', () => {
    const expectedResult = {
      type: 'ADD_TODO',
      payload: 'test',
    };

    expect(addTodo('test')).toEqual(expectedResult);
  });
});
