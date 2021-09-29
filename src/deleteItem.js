import displayTodos from './displayItems.js';

export default function (todos, i, attachEventListeners) {
  localStorage.setItem('todo', JSON.stringify(todos.filter((todo) => todo.id !== todos[i].id)));

  displayTodos();
  attachEventListeners();
}
