
class TaskPresenter {
    constructor(model, view) {
        this.model = model;
        this.view = view;

        
        this.view.setAddTaskHandler(() => this.addTask());
        this.view.setDeleteTaskHandler(id => this.removeTask(id));
        this.view.setToggleTaskHandler(id => this.toggleTaskStatus(id));

        
        this.updateView();
    }

   
    addTask() {
        const taskText = this.view.getTaskInput();
        if (taskText) {
            this.model.addTask(taskText);
            this.view.clearTaskInput();
            this.updateView();
        }
    }

    
    removeTask(id) {
        this.model.removeTask(id);
        this.updateView();
    }

   
    toggleTaskStatus(id) {
        this.model.toggleTaskStatus(id);
        this.updateView();
    }

    
    updateView() {
        const tasks = this.model.getTasks();
        this.view.displayTasks(tasks);
    }
}


const app = new TaskPresenter(new TaskModel(), new TaskView());
