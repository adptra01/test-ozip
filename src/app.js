const taskInput = document.getElementById("taskInput");
const taskList = document.getElementById("taskList");

let tasks = [
  {
    text: "Task 1",
    completed: false,
    createdAt: new Date(),
  },
  {
    text: "Task 2",
    completed: true,
    createdAt: new Date(),
  },
];

function addTask() {
  const taskText = taskInput.value;
  if (taskText === "") {
    alert("Please enter a task");
    return;
  }
  
const filterCheckbox = document.getElementById("filterCheckbox");

let showOnlyUncompleted = false;

function addTask() {
  const taskText = taskInput.value.trim();
  if (taskText === "") return;

  tasks.push({
    text: taskText,
    completed: false,
    createdAt: new Date(),
  };

  tasks.push(task);
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


window.addEventListener("DOMContentLoaded", renderTasks);

filterCheckbox.addEventListener("change", () => {
  showOnlyUncompleted = filterCheckbox.checked;
  renderTasks();
});
