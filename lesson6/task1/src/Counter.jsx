import React from 'react';
import * as CounterActions from './counterActions';
import { connect } from 'react-redux';

function Counter({ increment, decrement, reset, counter }) {
  return (
    <div className="counter">
      <button className="counter__button" onClick={decrement}>
        -
      </button>
      <span className="counter__value" onClick={reset}>
        {counter}
      </span>
      <button className="counter__button" onClick={increment}>
        +
      </button>
    </div>
  );
}

const mapDispatch = {
  increment: CounterActions.increment,
  decrement: CounterActions.decrement,
  reset: CounterActions.reset,
};
const mapState = store => {
  return { counter: store.counter };
};

export default connect(mapState, mapDispatch)(Counter);
