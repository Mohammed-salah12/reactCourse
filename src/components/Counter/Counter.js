import React, { useEffect, useState } from "react";

export const Counter = () => {
  const [Counter, SetCounter] = useState(0);
  useEffect(() => {
    console.log(Counter);

    return () => {
      console.log("cleanup function called");
      //the cleanup function is the same as the (component will unmount)
    };
  }, [Counter]); //while the dependencies array is empty it means component did mount
  //while the dependencies array is filled with dependencies it will be the same as the (component did update)
  return (
    <div>
      <div>
        <h1> {Counter}</h1>
        <button onClick={() => SetCounter(Counter + 1)}>Increment</button>
        <button onClick={() => SetCounter(Counter - 1)}>Decrement</button>
      </div>
    </div>
  );
};
