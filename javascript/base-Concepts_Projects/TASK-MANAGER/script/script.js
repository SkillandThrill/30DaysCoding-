class TaskManager {
    constructor() {
        this.tasks = [];
    }

    addTask(taskName) {
        const task = {
            id: Date.now(),
            name: taskName,
            completed: false
        };
        this.tasks.push(task);
        return task;

    }

    deleteTask(taskId) {
        this.tasks = this.tasks.filter(task => task.id !== taskId);

    }


    toggleTaskCompletion(taskId) {
        const task = this.tasks.find(task => task.id === taskId);
        if (task) {
            task.completed = !task.completed;
        }
    }
}

const taskManager = new TaskManager();

function renderTasks() {

    const taskList = document.getElementById('task-list');
    taskList.innerHTML = '';

    taskManager.tasks.forEach(task => {
        const taskItem = document.createElement('div');
        taskItem.classList.add('task-item');
        taskItem.innerHTML = `
    <input type="checkbox" ${task.completed ? 'checked' : ''} onchange = toggleTaskCompletion(${task.id})">
    <span> ${task.name}</span>
    <button class="delete-btn" onclick="deleteTask(${task.id})">Delete</button>    
    `;
        taskList.appendChild(taskItem);
    })
}

function addTask(event) {
    event.preventDefault();
    const taskInput = document.getElementById('task-input');
    const taskName = taskInput.value.trim();

    if (taskName !== '') {
        const newTask = taskManager.addTask(taskName);
        renderTasks();
        taskInput.value = '';
    }
}

function deleteTask(taskId) {
    taskManager.deleteTask(taskId);
    renderTasks();
}

function toggleTaskCompletion(taskId) {
    taskManager.toggleTaskCompletion(taskId)
    renderTasks();
}


const taskForm = document.getElementById('task-form');
taskForm.addEventListener('submit', addTask);

renderTasks();