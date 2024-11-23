import React, { useEffect, useState } from "react";

export const ApiFetchTest = () => {
  const [data, setData] = useState(null);
  const [error, setError] = useState("");
  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/todos`)
      .then((response) => response.json())
      .then((data) => setData(data))
      .catch((error) => setError(error));
  }, []);
  return (
    <div>
      {error && <p>{error}</p>}
      {data &&
        data.map((todo) => {
          return (
            <div key={todo.id}>
              <p>{todo.title}</p>
              <p>{todo.completed}</p>
            </div>
          );
        })}
    </div>
  );
};
