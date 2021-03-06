import displayTodos from './displayItems.js';
import attachEventListeners from './attachEventListener.js';

const addTodo = () => {
  const input = document.querySelector('.input-field');
  input.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
      if (input.value === '') {
        // eslint-disable-next-line no-alert
        alert('You cannot add empty fields');
      } else {
        const todos = JSON.parse(localStorage.getItem('todo') || '[]');
        const id = todos.length + 1;
        todos.push({ description: input.value, completed: false, id });
        localStorage.setItem('todo', JSON.stringify(todos));
        input.value = '';
        displayTodos();
        attachEventListeners();
      }
    }
  });
};

export default addTodo;