
const displayTodos = () => {
  const data = document.querySelector('.data');
  data.innerHTML = '';
  const todos = JSON.parse(localStorage.getItem('todo') || '[]');
  todos.forEach(({ description, id, completed }) => {
    const div = document.createElement('div');
    div.classList.add('d-height');
    div.classList.add('todo-cont');
    div.innerHTML = `<li id="item-${id}">
                        <input type="checkbox" ${completed && 'checked'} class="check-box" id="check-${id}">
                        <input type="text" class="no-border input-description" value="${description}" id="input-${id}" readonly>
                     </li>
                     <div class="delete-trash" id="deleteBtn-${id}"></div>`;
    data.appendChild(div);
  });
};

export default displayTodos;