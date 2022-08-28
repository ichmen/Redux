import store from "./store";
import { addUser, deleteUser, updateUser } from "./users.actions";
import { increment, decrement, reset } from "./counter.actions";
const user1 = { id: 76, name: "Tom" };
const user2 = { id: 33, name: "Tom" };

// console.log(store.getState());

store.subscribe(() => {
  console.log(store.getState());
});

store.dispatch(addUser(user1));
store.dispatch(addUser(user2));
store.dispatch(updateUser(33, { age: 17 }));
store.dispatch(deleteUser(33));
store.dispatch(increment());
store.dispatch(increment());
store.dispatch(increment());
store.dispatch(reset());
store.dispatch(decrement());
