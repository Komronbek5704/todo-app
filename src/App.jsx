import React, { useState } from 'react';
import './App.css';

function App() {


  function addTodo() {
  const newTodoInput = document.getElementById('new-todo');
  const todoList = document.getElementById('todo-list');
  const todoText = newTodoInput.value.trim();
  if (todoText === '') return;
  const newTodo = document.createElement('li');
  newTodo.classList.add('p-2', 'border-b', 'border-gray-200', 'flex', 'justify-between', 'items-center');
  newTodo.innerHTML = `
       <span>${todoText}</span>
       <button onclick="markComplete(this)" class="bg-green-500 text-white px-2 py-1 rounded">Complete</button>
     `;
  todoList.appendChild(newTodo);
  newTodoInput.value = '';
}

function markComplete(button) {
  const todoItem = button.parentElement;
  const todoText = todoItem.querySelector('span').textContent;
  const completedList = document.getElementById('completed-list');

  todoItem.remove();
  const completedTodo = document.createElement('li');
  completedTodo.classList.add('p-2', 'border-b', 'border-gray-200', 'flex', 'justify-between', 'items-center');
  completedTodo.innerHTML = `
       <span>${todoText}</span>
       <button onclick="markIncomplete(this)" class="bg-yellow-500 text-white px-2 py-1 rounded">Undo</button>
     `;
  completedList.appendChild(completedTodo);
}

function markIncomplete(button) {
  const completedItem = button.parentElement;
  const todoText = completedItem.querySelector('span').textContent;
  const todoList = document.getElementById('todo-list');

  completedItem.remove();
  const newTodo = document.createElement('li');
  newTodo.classList.add('p-2', 'border-b', 'border-gray-200', 'flex', 'justify-between', 'items-center');
  newTodo.innerHTML = `
       <span>${todoText}</span>
       <button onclick="markComplete(this)" class="bg-green-500 text-white px-2 py-1 rounded">Complete</button>
     `;
  todoList.appendChild(newTodo);
};
}
return (
  <div class="bg-gray-100 text-white p-9 h-screen flex items-center justify-center bg-gray-100 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500" style="background: rgb(200, 222, 200);">

    <div class=" max-w-xl mx-auto w-300 / 250 bg-white p-6 rounded-lg shadow-lg " style="background: rgb(13, 7, 20);">
      <h1 class="text-2xl font-bold mb-4">Todo App</h1>
      <div class="mb-4 flex gap-2 items-center">
        <input id="new-todo" type="text" class="w-100 p-4 border text-black border-gray-300 rounded" placeholder="Add a new task">
          <button onclick="addTodo()" class="mt-1  w-20 bg-pink-500 hover: rgb(158, 120, 207); text-white hover:bg-blue-600 p-3 rounded">+</button>
      </div>
      <h2 class="text-xl font-semibold mb-2">Task list</h2>
      <ul id="todo-list" class="list-none bg-gray-500 gap-2 p-0">

      </ul>
      <h2 class="text-xl font-semibold mt-6 mb-2">Done</h2>
      <ul id="completed-list" class="list-none p-0  bg-gray-500">

      </ul>
    </div>
  </div>
);
}

export default App;