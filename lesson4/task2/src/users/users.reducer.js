import { ADD, DELETE } from "./users.actions";

const initialState = { users: { usersList: [] } };

export default function usersReducer(state = initialState, action) {
  switch (action.type) {
    case ADD:
      return {
        ...state,
        users: { usersList: state.users.usersList.concat(action.payload.user) },
      };
    case DELETE:
      const newList = state.users.usersList.filter(
        (user) => user.id !== action.payload.userId
      );

      return {
        ...state,
        users: { usersList: newList },
      };
    default:
      return state;
  }
}
