class TaskView {
    constructor() {
        this.taskInput = document.getElementById('taskInput');
        this.addTaskButton = document.getElementById('addTaskButton');
        this.taskList = document.getElementById('taskList');
    }

    getTaskInput() {
        return this.taskInput.value;
    }

    clearTaskInput() {
        this.taskInput.value = '';
    }

    displayTasks(tasks) {
        this.taskList.innerHTML = '';
        tasks.forEach((task, index) => {
            const li = document.createElement('li');
            li.innerHTML = `${task} <button class="deleteButton" data-index="${index}">Eliminar</button>`;
            this.taskList.appendChild(li);
        });
    }

    bindAddTask(handler) {
        this.addTaskButton.addEventListener('click', handler);
    }

    bindDeleteTask(handler) {
        this.taskList.addEventListener('click', (event) => {
            if (event.target.classList.contains('deleteButton')) {
                const index = event.target.getAttribute('data-index');
                handler(index);
            }
        });
    }
}

const view = new TaskView();


