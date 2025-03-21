import React, { useState } from "react";

const TodoApp = () => {
  const [tasks, setTasks] = useState(new Map([
    [1, "Learn React"],
    [2, "Build a project"],
    [3, "Apply for jobs"]
  ]));

  const deleteTask = (id) => {
    const newTasks = new Map(tasks);
    newTasks.delete(id);
    setTasks(newTasks);
  };

  return (
    <div>
      {[...tasks.entries()].map(([id, task]) => (
        <div key={id}>
          <p>{task}</p>
          <button onClick={() => deleteTask(id)}>Delete</button>
        </div>
      ))}
    </div>
  );
};

export default TodoApp;
