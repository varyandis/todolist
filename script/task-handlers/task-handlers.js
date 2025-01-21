import Tasks from "../data.js";
import { createListTasks } from "../utils.js";

const handlerDeleteTask = (id) => {
  let updatedTasks = Tasks.filter(task => task.id !== id);

  Tasks.length = 0;
  Tasks.push(...updatedTasks);

  createListTasks(Tasks)
}

const handlerToDoTask = (id) => {
  const taskToDo = document.querySelector(`#${id}`);
  taskToDo.classList.toggle('complete');

  Tasks.map((task) => {
    if (task.id === id) {
      taskToDo.classList.contains('complete') ? task.complete = true : task.complete = false;
    }
  }
  );

  createListTasks(Tasks)
}

const handlerSaveTask = (field, id, taskText) => {
  Tasks.map((task) => {
    if (task.id === id) {
      task.value = field.value
      taskText.textContent = field.value
    }
  })
  
};

const handlerEditeTask = (id) => {
  const taskButtons = document.querySelector(`#${id} .template-task__button`);
  const taskEdite = document.querySelector(`#${id} .template-task__button-add-task`);
  const taskText = document.querySelector(`#${id} .template-task__text`);
  const taskEditeField = taskEdite.querySelector('.template-task__add-task__input');
  const saveButton = taskEdite.querySelector('.template-task__add-task__button');

  Tasks.map((task) => {
    if (task.id === id) {
      taskEditeField.value = task.value;
    }
  })

  taskEdite.classList.remove('hide');
  taskButtons.classList.add('hide');
  taskText.classList.add('hide');

  taskEditeField.focus();

  saveButton.addEventListener('click', () => {
    handlerSaveTask(taskEditeField, id, taskText)
    taskEdite.classList.add('hide');
    taskButtons.classList.remove('hide');
    taskText.classList.remove('hide');
  });
};

export {handlerDeleteTask, handlerToDoTask, handlerEditeTask};