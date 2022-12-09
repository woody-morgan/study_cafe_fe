import React from 'react';
import { useRecoilValue } from 'recoil';
import { addTodolistSelector } from '@src/atom/todo';

const TodolistShowModal = () => {
  const todolistInfo = useRecoilValue(addTodolistSelector);
  console.log(todolistInfo);

  return (
    <div className="space-y-6">
      {todolistInfo.todoList.length > 0 &&
        todolistInfo.todoList.map((todoItem, idx) => {
          const inputKey = `show-todo-${idx}`;
          return (
            <div key={inputKey} className="h-16 bg-slate-500/50 rounded-md">
              <p className="text-3xl px-2 py-2">{todoItem.content}</p>
            </div>
          );
        })}
    </div>
  );
};

export default TodolistShowModal;
