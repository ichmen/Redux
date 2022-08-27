const ADD = "USER/ADD";
const DELETE = "USER/DELETE";

const defaultState = { usersList: [] };

export function userReducer(state = defaultState, action) {
  switch (action.type) {
    case ADD: {
      return { ...state, usersList: [...state.usersList, action.user] };
    }
    case DELETE: {
      return {
        ...state,
        usersList: state.usersList.filter(({ id }) => !(id === action.id)),
      };
    }

    default:
      return state;
  }
}
