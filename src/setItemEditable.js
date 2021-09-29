// eslint-disable-next-line func-names
export default function (todos, i) {
  document.getElementById(`input-${todos[i].id}`).readOnly = false;
  document.getElementById(`input-${todos[i].id}`).classList.remove('no-border');
}
