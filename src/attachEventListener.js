import checkItem from './checkItem.js';
import deleteItem from './deleteItem.js';
import setItemEditable from './setItemEditable.js';
import editItem from './editItem.js';

const attachEventListeners = () => {
  const todos = JSON.parse(localStorage.getItem('todo') || '[]');
  for (let i = 0; i < todos.length; i += 1) {
    // Attach check item event listener
    const inCheck = document.getElementById(`check-${todos[i].id}`);
    inCheck.addEventListener('change', (e) => checkItem(i, e, todos));

    // Attach delete item event listener
    const deleteBtn = document.getElementById(`deleteBtn-${todos[i].id}`);
    deleteBtn.addEventListener('click', () => deleteItem(todos, i, attachEventListeners));

    // Attach set item editable event listener
    const item = document.getElementById(`item-${todos[i].id}`);
    item.addEventListener('dblclick', () => setItemEditable(todos, i));

    // Attach edit item event listener
    const itemInput = document.getElementById(`input-${todos[i].id}`);
    itemInput.addEventListener('keypress', (e) => editItem(i, e, todos, itemInput));
  }
};

export default attachEventListeners;