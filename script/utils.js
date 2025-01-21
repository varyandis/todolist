import Tasks from "./data.js"
import {handlerDeleteTask, handlerToDoTask, handlerEditeTask} from "./task-handlers/task-handlers.js";
import { saveLocalStorageTasks, loadLocalStorageTasks } from "./local-storage/local-storage.js";

const list = document.querySelector('.list');

const createTemplateTask = ({value, id, complete}) => {
  const taskTemplate = document.querySelector('.template-task');
  const task = taskTemplate.content.cloneNode(true);

  task.querySelector('div').id = id;
  task.querySelector('.template-task__text').textContent = value;

  task.querySelector('.template-task__button-delete').addEventListener('click', () => {
    handlerDeleteTask(id);
    saveLocalStorageTasks();
  })

  task.querySelector('.template-task__button-todo').addEventListener('click', () => {
    handlerToDoTask(id);
    saveLocalStorageTasks();
  })

  task.querySelector('.template-task__button-edite').addEventListener('click', () => {
    handlerEditeTask(id);
    saveLocalStorageTasks();
  })

  if (complete) {
    task.querySelector('div').classList.add('complete');
  };

  return task;
}

const addTask = () => {
  const taskButton = document.querySelector('.add-task__input')
  const taskValue = taskButton.value
  const createTaskId = () => `f${(+new Date()).toString(16)}-${taskValue.length}`;
  const task = {
    value: taskValue,
    id: createTaskId(),
    complete: false,
    date: Date.now(),
  };

  if (taskValue.length === 0) {
    return;
  };

  Tasks.push(task)
  taskButton.value = '';
  createListTasks(Tasks);
  saveLocalStorageTasks();
}

const clearList = () => {
  Tasks.length = 0;
  list.innerHTML = '';
  saveLocalStorageTasks();
}

const sortedList = (a, b) => {
    if(!a.complete && b.complete) {
      return -1;
    } 
    if(a.complete && !b.complete) {    
      return 1;
    } 
    return a.date - b.date;;
}

const createListTasks = (tasks, isComplete) => {
  list.innerHTML = '';

  const sortedTasks = tasks.slice().sort((a, b) => sortedList(a, b));

  if (isComplete || !isComplete) {
    return sortedTasks.forEach((task) => {
      list.append(createTemplateTask(task))
      });
    }

  Tasks.length = 0;
  Tasks.push(...sortedTasks);
  Tasks.forEach((task) => {
  list.append(createTemplateTask(task))
  });
}

export {addTask, clearList, createListTasks}