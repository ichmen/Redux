export const ADD = "USER/ADD";
export const DELETE = "USER/DELETE";

export function addUser(user) {
  return {
    type: ADD,
    payload: {
      user,
    },
  };
}

export function deleteUser(userId) {
  return {
    type: DELETE,
    payload: {
      userId,
    },
  };
}
