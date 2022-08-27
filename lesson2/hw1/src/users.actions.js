const ADD = "USER/ADD";
const DELETE = "USER/DELETE";

export function addUser(user) {
  return {
    type: ADD,
    user,
  };
}
export function deleteUser(id) {
  return {
    type: DELETE,
    id,
  };
}
