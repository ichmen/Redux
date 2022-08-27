import store, { increment, decrement, reset } from "./store";

import "./index.scss";

const incrButton = document.querySelector('[data-action="increment"]');
const decrButton = document.querySelector('[data-action="decrement"]');
const resetButton = document.querySelector('[data-action="reset"]');
const resultElem = document.querySelector(".counter__result");

incrButton.addEventListener("click", incrementHandler);
decrButton.addEventListener("click", decrementHandler);
resetButton.addEventListener("click", resetHandler);

function incrementHandler() {
  store.dispatch(increment());
}
function decrementHandler() {
  store.dispatch(decrement());
}
function resetHandler() {
  store.dispatch(reset());
}

store.subscribe(() => {
  const history = store.getState().history;
  const result = history.reduce((acc, elem) => acc + elem, 0);
  const equation = history
    .map((elem) => (elem > 0 ? `+${elem}` : elem))
    .join("");
  resultElem.textContent = history.length > 0 ? `${equation} = ${result}` : "";
});
