import React, { useState } from "react";

export const Counter = () => {
  const [Counter, SetCounter] = useState(0);

  const incrementCounter = () => {
    SetCounter(Counter + 1);
  };
  const restCounter = () => {
    SetCounter(0);
  };
  return (
    <div>
      <div>
        <h1> {Counter}</h1>
        <button onClick={incrementCounter}>Increment</button>
        <button onClick={restCounter}>Decrement</button>
      </div>
    </div>
  );
};
