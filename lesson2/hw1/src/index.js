import store from "./store";
import { addUser, deleteUser } from "./users.actions";
const user1 = { id: 76, name: "Tom" };
const user2 = { id: 33, name: "Tom" };

// console.log(store.getState());

store.subscribe(() => {
  console.log(store.getState());
});

store.dispatch(addUser(user1));
store.dispatch(addUser(user2));
store.dispatch(deleteUser(33));
