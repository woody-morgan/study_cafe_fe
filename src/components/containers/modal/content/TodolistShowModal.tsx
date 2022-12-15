import React from 'react';
import { useRecoilValue } from 'recoil';
import { addTodolistSelector } from '@src/atom/todo';

const TodolistShowModal = () => {
  const todolistInfo = useRecoilValue(addTodolistSelector);

  return (
    <div className="space-y-6">
      {todolistInfo.todoList.length > 0 &&
        todolistInfo.todoList.map((todoItem, idx) => {
          const inputKey = `show-todo-${idx}`;
          return (
            <div key={inputKey} className="bg-white/30 rounded-md">
              <p className="text-black text-xl px-2 py-2">{todoItem.content}</p>
            </div>
          );
        })}
    </div>
  );
};

export default TodolistShowModal;
