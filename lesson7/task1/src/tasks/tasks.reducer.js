import { TASKS_LIST_LOADED } from './tasks.actions';
const defaultState = { tasksList: [] };

export function tasksReducer(state = defaultState, action) {
  switch (action.type) {
    case TASKS_LIST_LOADED:
      return { ...state, tasksList: action.payload.tasksList };

    default:
      return state;
  }
}
