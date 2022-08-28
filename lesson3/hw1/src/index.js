import store from "./store";
import { addProduct, removeProduct } from "./cart.actions";
import { setUser, removeUser } from "./user.actions";
import { setLanguage } from "./language.actions";

const product1 = { id: 22, name: "milk" };
const product2 = { id: 23, name: "milk" };
const user = { name: "Bob" };

store.subscribe(() => {
  console.log(store.getState());
});
store.dispatch(addProduct(product1));
store.dispatch(addProduct(product2));
store.dispatch(removeProduct(22));
store.dispatch(setUser(user));
store.dispatch(setLanguage("de"));
store.dispatch(removeUser());
store.dispatch(removeProduct(23));
