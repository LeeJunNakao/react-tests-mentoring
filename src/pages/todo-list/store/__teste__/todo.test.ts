import reducer, { addItem, removeItems, State } from '../todos';
describe('test todos redux', () => {
  const initialState: State = {
    todoList: [],
  };
  it('should test addItem', () => {
    const state = reducer(initialState, addItem('item 1'));

    const state2 = reducer(state, addItem('item 2'));

    const [item] = state2.todoList.slice(-1);

    expect(item).toEqual('item 2');
  });

  it('should test removeItens', () => {
    const state = reducer(initialState, addItem('item 1'));

    const state2 = reducer(state, removeItems(['item 1']));

    expect(state2.todoList).toEqual([]);
  });
})

