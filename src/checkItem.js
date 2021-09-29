const checkItem = (i, e, todoList) => {
  todoList[i].completed = e.target.checked;
  localStorage.setItem('todo', JSON.stringify(todoList));
};

export default checkItem;