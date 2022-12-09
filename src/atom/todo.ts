import { atom, DefaultValue, selector } from 'recoil';
import produce from 'immer';

export interface ITodoItem {
  isFinished: boolean;
  content: string;
}

export interface TodolistType {
  todoList: ITodoItem[];
}

const defaultState: TodolistType = {
  todoList: [],
};

const todolistStateAtom = atom<TodolistType>({
  key: 'todolistStateAtom',
  default: defaultState,
});

const addTodolistSelector = selector<TodolistType>({
  key: 'todolistStateAtom/add',
  get: ({ get }) => {
    return get(todolistStateAtom);
  },
  set: ({ set }, newValue) => {
    if (newValue instanceof DefaultValue) {
      set(todolistStateAtom, defaultState);
    } else {
      set(
        todolistStateAtom,
        produce((draft) => {
          newValue.todoList.forEach((item) => {
            draft.todoList.push(item);
          });
        })
      );
    }
  },
});

export { todolistStateAtom, addTodolistSelector };
