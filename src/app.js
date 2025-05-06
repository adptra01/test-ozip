const taskInput = document.getElementById("taskInput");
const taskList = document.getElementById("taskList");
const filterCheckbox = document.getElementById("filterCheckbox");

let tasks = [];
let showOnlyUncompleted = false;

function addTask() {
  const taskText = taskInput.value.trim();
  if (taskText === "") return;

  tasks.push({
    text: taskText,
    completed: false,
    createdAt: new Date()
  });

  taskInput.value = "";
  renderTasks();
}

function renderTasks() {
  taskList.innerHTML = "";

  const filteredTasks = showOnlyUncompleted
    ? tasks.filter(task => !task.completed)
    : tasks;

  filteredTasks.forEach((task, indexInFiltered) => {
    const indexInAllTasks = tasks.indexOf(task);

    const li = document.createElement("li");
    li.textContent = task.text;
    if (task.completed) {
      li.style.textDecoration = "line-through";
    }

    li.addEventListener("click", () => toggleTask(indexInAllTasks));
    taskList.appendChild(li);
  });
}

function toggleTask(index) {
  tasks[index].completed = !tasks[index].completed;
  renderTasks();
}

filterCheckbox.addEventListener("change", () => {
  showOnlyUncompleted = filterCheckbox.checked;
  renderTasks();
});
