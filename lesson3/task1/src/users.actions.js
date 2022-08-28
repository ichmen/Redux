export const ADD = "USER/ADD";
export const DELETE = "USER/DELETE";
export const UPDATE = "USER/UPDATE";

export function addUser(user) {
  return {
    type: ADD,
    payload: {
      user,
    },
  };
}
export function deleteUser(id) {
  return {
    type: DELETE,
    payload: {
      id,
    },
  };
}

export function updateUser(id, user) {
  return {
    type: UPDATE,
    payload: {
      id,
      user,
    },
  };
}
