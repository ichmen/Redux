import { SET, REMOVE } from "./user.actions";

export function userReducer(state = null, action) {
  switch (action.type) {
    case SET:
      return action.payload.user;

    case REMOVE:
      return null;

    default:
      return state;
  }
}
