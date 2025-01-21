import {addTask, clearList, createListTasks} from "./utils.js";
import {completeFilter, activeFilter } from "./task-filter/task-filter.js";
import { loadLocalStorageTasks } from "./local-storage/local-storage.js";
import taskSearch from "./task-search/task-search.js";
import Tasks from "./data.js";

const addTaskButton = document.querySelector('.add-task__button');
const taskButton = document.querySelector('.add-task__input');
const clearListButton = document.querySelector('.list-clear__button');
const completedButton = document.querySelector('#completed');
const allButton = document.querySelector('#all');
const activeButton = document.querySelector('#active');
const searchButton = document.querySelector('#mySearch');


Tasks.push(...loadLocalStorageTasks());

createListTasks(Tasks);

addTaskButton.addEventListener('click', (evt) => {
    addTask();
});

taskButton.addEventListener('keydown', (evt) => {
  if (evt.key === 'Enter') {
    addTask();
  }
});

clearListButton.addEventListener('click', () => {
  clearList();
});

completedButton.addEventListener('change', () => {
  completeFilter();
});

allButton.addEventListener('change', () => {
  createListTasks(Tasks);
});

activeButton.addEventListener('change', () => {
  activeFilter();;
});

searchButton.addEventListener('keyup', (evt) => {
  taskSearch(searchButton)
})


