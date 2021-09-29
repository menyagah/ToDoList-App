import displayTodos from './displayItems.js';

// eslint-disable-next-line func-names
export default function (todos, i, attachEventListeners) {
  localStorage.setItem('todo', JSON.stringify(todos.filter((todo) => todo.id !== todos[i].id)));

  displayTodos();
  attachEventListeners();
}
