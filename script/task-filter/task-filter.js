import Tasks from "../data.js";
import { createListTasks } from "../utils.js";

const searchButton = document.querySelector('#mySearch');

const completeFilter = () => {
const filtredTasks = Tasks.filter((task) => task.complete === true);
createListTasks(filtredTasks, true)
searchButton.value = '';
};

const activeFilter = () => {
const filtredTasks = Tasks.filter((task) => task.complete === false);
createListTasks(filtredTasks, false)
searchButton.value = '';
};

export {completeFilter, activeFilter};