import { ADD, DELETE, UPDATE } from "./users.actions";

const defaultState = { usersList: [] };

export function userReducer(state = defaultState, action) {
  switch (action.type) {
    case ADD: {
      return { ...state, usersList: [...state.usersList, action.payload.user] };
    }
    case DELETE: {
      return {
        ...state,
        usersList: state.usersList.filter(
          ({ id }) => !(id === action.payload.id)
        ),
      };
    }
    case UPDATE: {
      const updatedUser = state.usersList.map((user) => {
        if (user.id === action.payload.id) {
          return { ...user, ...action.payload.user };
        }
        return user;
      });
      return {
        ...state,
        usersList: updatedUser,
      };
    }

    default:
      return state;
  }
}
