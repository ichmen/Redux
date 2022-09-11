import * as Gateway from '../gateway';
export const TASKS_LIST_LOADED = 'TASKS/TASKS_LIST_LOADED';

export function tasksListLoaded(tasksList) {
  return {
    type: TASKS_LIST_LOADED,
    payload: {
      tasksList,
    },
  };
}

export function getTasksList() {
  function thunkAction(dispatch) {
    Gateway.fetchTasks().then(tasksList => dispatch(tasksListLoaded(tasksList)));
  }
  return thunkAction;
}

export function updateTask(id) {
  function thunkAction(dispatch, getState) {
    const state = getState();
    // console.log(state);
    const taskToUpdate = state.tasks.tasksList.find(task => task.id === id);
    const modifiedTask = { ...taskToUpdate, done: !taskToUpdate.done };
    Gateway.updateTask(modifiedTask).then(() => dispatch(getTasksList()));
  }
  return thunkAction;
}

export function deleteTask(id) {
  function thunkAction(dispatch) {
    Gateway.deleteTask(id).then(() => dispatch(getTasksList()));
  }
  return thunkAction;
}
export function createTask(text) {
  function thunkAction(dispatch) {
    const newTask = {
      text: text,
      done: false,
    };
    Gateway.postTask(newTask).then(() => dispatch(getTasksList()));
  }
  return thunkAction;
}
