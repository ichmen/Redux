import TodoList from './tasks/components/TodoList';
import React from 'react';
import { Provider } from 'react-redux';
import { store } from './tasks/tasks.store';

function App() {
  return (
    <Provider store={store}>
      <TodoList />
    </Provider>
  );
}

export default App;
