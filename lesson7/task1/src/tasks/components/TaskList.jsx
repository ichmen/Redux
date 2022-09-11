import React from 'react';
import Task from './Task';
import CreateTask from './CreateTask';
import * as Actions from '../tasks.actions';
import { connect } from 'react-redux';
import { sortedTasksListSelector } from '../tasks.selectors';
import { useEffect } from 'react';
import PropTypes from 'prop-types';

function TaskList({ createTask, getTasksList, updateTask, deleteTask, tasksList }) {
  useEffect(() => {
    getTasksList();
  }, []);

  TaskList.propTypes = {
    createTask: PropTypes.func.isRequired,
    getTasksList: PropTypes.func.isRequired,
    updateTask: PropTypes.func.isRequired,
    deleteTask: PropTypes.func.isRequired,
    tasksList: PropTypes.array.isRequired,
  };

  return (
    <>
      <CreateTask onCreateTask={createTask} />
      <ul className="list">
        {tasksList.map(task => (
          <Task key={task.id} {...task} onCheckBoxChange={updateTask} onDelete={deleteTask} />
        ))}
      </ul>
    </>
  );
}

const mapState = state => {
  return { tasksList: sortedTasksListSelector(state) };
};

const mapDispatch = {
  createTask: Actions.createTask,
  getTasksList: Actions.getTasksList,
  updateTask: Actions.updateTask,
  deleteTask: Actions.deleteTask,
};
export default connect(mapState, mapDispatch)(TaskList);
