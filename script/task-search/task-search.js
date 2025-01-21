import Tasks from "../data.js"
import { createListTasks } from "../utils.js";

const taskSearch = (button) => {
  const value = button.value.toLowerCase()
  const filtredTasks = Tasks.filter((task) => {
    const search = task.value.toLowerCase().slice(0, value.length);
    return search === value
  }
  );
  createListTasks(filtredTasks)
  if (value.length === 0) {
    createListTasks(Tasks)
  }
}

export default taskSearch