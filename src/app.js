const taskInput = document.getElementById("taskInput");
const taskList = document.getElementById("taskList");
let tasks = [];

function addTask() {
  const taskText = taskInput.value;
  if (taskText === "") return;

  const task = {
    text: taskText,
    completed: false,
    createdAt: new Date()
  };

  tasks.push(task);
  renderTasks();
}

function renderTasks() {
  taskList.innerHTML = "";
  tasks.forEach((task, index) => {
    const li = document.createElement("li");
    li.textContent = task.text;
    if (task.completed) {
      li.style.textDecoration = "line-through";
    }

    li.addEventListener("click", () => toggleTask(index));
    taskList.appendChild(li);
  });
}

function toggleTask(index) {
  tasks[index].completed = !tasks[index].completed;
  renderTasks();
}