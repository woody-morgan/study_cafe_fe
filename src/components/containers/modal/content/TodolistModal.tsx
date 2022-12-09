import React, { useCallback, useState } from 'react';
import { Button, IconButton, InputBox } from '@src/components/ui/atom';
import { useSetRecoilState } from 'recoil';
import { addTodolistSelector, TodolistType } from '@src/atom/todo';
import produce from 'immer';
import { closeModal } from '@src/atom/modal';
import { ToastInfo } from '@src/utils/toast';

const TodolistModal = () => {
  const [myTodos, setMyTodos] = useState<TodolistType>({
    todoList: [
      {
        isFinished: false,
        content: '',
      },
    ],
  });

  const handleCurrentInputChange = useCallback((e) => {
    const { value } = e.target;
    setMyTodos(
      produce((draft) => {
        draft.todoList[draft.todoList.length - 1].content = value;
      })
    );
  }, []);

  const addTodoNode = useSetRecoilState(addTodolistSelector);
  const closeTodoModal = useSetRecoilState(closeModal);

  const handleAddTodo = useCallback(() => {
    if (myTodos.todoList.length === 1 && myTodos.todoList[0].content === '') {
      ToastInfo('할 일을 입력해주세요');
      return;
    }
    addTodoNode(myTodos);
    closeTodoModal();
  }, [addTodoNode, closeTodoModal, myTodos]);

  const addTodoRow = useCallback(() => {
    setMyTodos(
      produce((draft) => {
        draft.todoList.push({
          isFinished: false,
          content: '',
        });
      })
    );
  }, []);

  return (
    <div className="space-y-6">
      {myTodos.todoList.length > 0 &&
        myTodos.todoList.map((todoItem, idx) => {
          const inputKey = `make-todo-${idx}`;
          if (myTodos.todoList.length > 1 && idx === 0) {
            return (
              <InputBox
                readOnly
                key={inputKey}
                label="할 일 목록"
                name="todo"
                value={todoItem.content}
                type="id"
              />
            );
          }
          if (idx !== myTodos.todoList.length - 1) {
            return (
              <InputBox readOnly key={inputKey} name="todo" value={todoItem.content} type="id" />
            );
          }
          return (
            <InputBox
              key={inputKey}
              name="todo"
              placeholder="할 일을 입력해주세요"
              value={todoItem.content}
              type="id"
              onChange={handleCurrentInputChange}
            />
          );
        })}
      <div className="flex justify-center">
        <IconButton name="plus" size={30} onClick={addTodoRow} />
      </div>
      <Button fullWidth styles="primary" onClick={handleAddTodo}>
        제출
      </Button>
    </div>
  );
};

export default TodolistModal;
