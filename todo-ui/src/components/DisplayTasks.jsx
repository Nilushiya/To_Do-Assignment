import React from 'react';
import '../style/DisplayTask.scss'

const DisplayTasks = ({ tasks, onComplete }) => {
  if (!tasks || tasks.length === 0) {
    return (
      <div className="no-tasks">
        <p>No tasks available</p>
      </div>
    );
  }

  return (
    <div className="display-task-container">
      {tasks.map((task) => (
        <div key={task.taskId} className="task-card">
          <h2>{task.title}</h2>
           <div className="task-body">
                <div className="task-desc">{task.description}</div>
                <button onClick={() => onComplete(task.taskId)}>Done</button>
           </div>
        </div>
      ))}
    </div>
  );
};

export default DisplayTasks;
