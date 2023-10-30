class TaskController {
    constructor(model, view) {
        this.model = model;
        this.view = view;

        this.view.bindAddTask(this.handleAddTask.bind(this));
        this.view.bindDeleteTask(this.handleDeleteTask.bind(this));

        this.updateView();
    }

    handleAddTask() {
        const task = this.view.getTaskInput();
        if (task.trim() !== '') {
            this.model.addTask(task);
            this.view.clearTaskInput();
            this.updateView();
        }
    }

    handleDeleteTask(index) {
        this.model.getTasks().splice(index, 1);
        this.updateView();
    }

    updateView() {
        const tasks = this.model.getTasks();
        this.view.displayTasks(tasks);
    }
}

const controller = new TaskController(model, view);

