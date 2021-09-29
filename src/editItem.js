export default function editItem(i, e, todos, itemInput) {
  if (e.key === 'Enter') {
    if (itemInput.value === '') {
      // eslint-disable-next-line no-alert
      alert('You cannot add empty fields');
    } else {
      todos[i].description = itemInput.value;
      localStorage.setItem('todo', JSON.stringify(todos));

      document.getElementById(`input-${todos[i].id}`).readOnly = true;
      document.getElementById(`input-${todos[i].id}`).classList.add('no-border');
    }
  }
}