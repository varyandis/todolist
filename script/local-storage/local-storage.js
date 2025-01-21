const saveLocalStorageTasks = () => {
  localStorage.setItem('tasks', JSON.stringify(Tasks));
}

const loadLocalStorageTasks = () => {
  const savedTasks = localStorage.getItem('tasks');
  if (savedTasks) {
    return JSON.parse(savedTasks);
  };
  return [];
}

export {saveLocalStorageTasks, loadLocalStorageTasks};