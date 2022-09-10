export const TOGGLE_SPINNER = 'USERS/TOGGLE_SPINNER';
export const USER_DATA_RECEIVED = 'USERS/USER_DATA_RECEIVED';
import { getUserData } from './gateway';

export function toggleSpinner() {
  return { type: TOGGLE_SPINNER };
}

export function userDataReceived(userData) {
  return {
    type: USER_DATA_RECEIVED,
    payload: { userData },
  };
}

export function fetchUserData(userName) {
  return function (dispatch) {
    dispatch(toggleSpinner());
    getUserData(userName).then(data => dispatch(userDataReceived(data)));
  };
}
