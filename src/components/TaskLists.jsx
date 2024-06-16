// src/components/TaskList.js
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { deleteTask, setTaskPriority } from '../redux/taskreducer/action';

const TaskList = () => {
  const tasks = useSelector((state) => state.TaskReducer?.tasks);
  const dispatch = useDispatch();

  const handleDeleteTask = (id) => {
    dispatch(deleteTask(id));
  };

  const handleSetPriority = (id, priority) => {
    dispatch(setTaskPriority(id, priority));
  };

  return (
    <ul>
      {tasks?.map((task) => (
        <li key={task.id}>
          {task.text}
          <select
            value={task.priority}
            onChange={(e) => handleSetPriority(task.id, e.target.value)}
          >
            <option value="High">High</option>
            <option value="Medium">Medium</option>
            <option value="Low">Low</option>
          </select>
          <button onClick={() => handleDeleteTask(task.id)}>Delete</button>
        </li>
      ))}
    </ul>
  );
};

export default TaskList;
