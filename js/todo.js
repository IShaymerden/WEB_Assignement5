// Task 8: temporary array; no database or localStorage required.
let tasks = [];
let nextId = 1;
const form = document.getElementById('todoForm');
const taskInput = document.getElementById('taskInput');
const todoList = document.getElementById('todoList');
function renderTasks() {
  todoList.replaceChildren();
  tasks.forEach(function (task) {
    const item = document.createElement('li');
    if (task.completed) item.classList.add('completed');
    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.checked = task.completed;
    checkbox.setAttribute('aria-label', 'Mark ' + task.text + ' as completed');
    checkbox.addEventListener('change', function () {
      task.completed = checkbox.checked;
      renderTasks();
    });
    const label = document.createElement('span');
    label.className = 'task-label';
    label.textContent = task.text; // textContent avoids HTML injection
    label.addEventListener('click', function () { task.completed = !task.completed; renderTasks(); });
    const deleteButton = document.createElement('button');
    deleteButton.className = 'danger';
    deleteButton.textContent = 'Delete';
    deleteButton.addEventListener('click', function () {
      tasks = tasks.filter(function (t) { return t.id !== task.id; });
      renderTasks();
    });
    item.append(checkbox, label, deleteButton);
    todoList.appendChild(item);
  });
  const completed = tasks.filter(function (task) { return task.completed; }).length;
  document.getElementById('todoCount').textContent = tasks.length + ' tasks · ' + completed + ' completed';
}
form.addEventListener('submit', function (event) {
  event.preventDefault();
  const text = taskInput.value.trim();
  if (!text) { document.getElementById('todoMessage').textContent = 'Please enter a task.'; return; }
  tasks.push({id: nextId++, text: text, completed: false});
  taskInput.value = '';
  document.getElementById('todoMessage').textContent = 'Task added!';
  renderTasks();
  taskInput.focus();
});
renderTasks();
