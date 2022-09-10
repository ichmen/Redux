import { TOGGLE_SPINNER, USER_DATA_RECEIVED } from './usersActions';

const defaultState = { userData: null, isFetching: false };

export function usersReducer(state = defaultState, action) {
  switch (action.type) {
    case USER_DATA_RECEIVED:
      console.log(state);
      return { ...state, userData: action.payload.userData, isFetching: false };

    case TOGGLE_SPINNER:
      return { ...state, isFetching: true };

    default:
      return state;
  }
}
