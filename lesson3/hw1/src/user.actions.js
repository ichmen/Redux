export const SET = "USER/SET";
export const REMOVE = "USER/REMOVE";

export function setUser(user) {
  return {
    type: SET,
    payload: {
      user,
    },
  };
}

export function removeUser() {
  return {
    type: REMOVE,
  };
}
