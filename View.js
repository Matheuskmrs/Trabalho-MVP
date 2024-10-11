
class TaskView {
    constructor() {
        this.taskInput = document.getElementById('taskInput');
        this.addTaskBtn = document.getElementById('addTaskBtn');
        this.taskList = document.getElementById('taskList');
    }


    getTaskInput() {
        return this.taskInput.value;
    }

 
    clearTaskInput() {
        this.taskInput.value = '';
    }


    displayTasks(tasks) {
        this.taskList.innerHTML = tasks.map(task => `
            <li>
                <span style="text-decoration: ${task.completed ? 'line-through' : 'none'};">
                    ${task.text}
                </span>
                <button data-id="${task.id}" class="toggle-btn">
                    ${task.completed ? 'Desfazer' : 'Feito'}
                </button>
                <button data-id="${task.id}" class="delete-btn">Deletar</button>
            </li>
        `).join('');
    }

    
    setAddTaskHandler(handler) {
        this.addTaskBtn.addEventListener('click', handler);
    }

    setDeleteTaskHandler(handler) {
        this.taskList.addEventListener('click', event => {
            if (event.target.className === 'delete-btn') {
                const id = parseInt(event.target.dataset.id, 10);
                handler(id);
            }
        });
    }

    setToggleTaskHandler(handler) {
        this.taskList.addEventListener('click', event => {
            if (event.target.className === 'toggle-btn') {
                const id = parseInt(event.target.dataset.id, 10);
                handler(id);
            }
        });
    }
}
