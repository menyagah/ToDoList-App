import displayTodos from './displayItems.js';
import attachEventListeners from './attachEventListener.js';

const clearAllBtn = () => {
  const clearAllChecked = document.querySelector('.btn');
  clearAllChecked.addEventListener('click', () => {
    const todoList = JSON.parse(localStorage.getItem('todo') || '[]');
    localStorage.setItem('todo', JSON.stringify(todoList.filter((todo) => todo.completed === false)));

    displayTodos();
    attachEventListeners();
  });
};

export default clearAllBtn;