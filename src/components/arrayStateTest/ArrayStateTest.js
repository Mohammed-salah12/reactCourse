import React, { useState } from "react";

export const ArrayStateTest = () => {
  const [tasks, setTasks] = useState(["task 1"]);
  const [input, setInput] = useState("");

  const addTask = (e) => {
    const { target } = e;
    e.preventDefault();
    if (input) {
      setTasks([...tasks, input]);
      target.reset(); // Use form reset() to clear all form inputs
    }
  };
  const handleChange = (event) => {
    const { value } = event.target;
    console.log(input);
    setInput(value);
  };
  return (
    <div>
      <form onSubmit={addTask}>
        <input type="text" onChange={handleChange} />
        <button type="submit">submit Task</button>
      </form>
      {tasks.map((task, idx) => {
        return <div key={idx}>{task}</div>; // you can use any unique key here, here we're using taskId as a key
      })}
    </div>
  );
};
