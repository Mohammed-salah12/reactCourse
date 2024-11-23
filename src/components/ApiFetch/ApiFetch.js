import React, { useState, useEffect } from "react";

export const ApiFetch = () => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/todos`)
      .then((response) => response.json())
      .then((json) => setData(json))
      .catch((error) => setError(error));
  }, []);
  return (
    <div>
      {error && <p>{error}</p>}
      {data &&
        data.map((data, idx) => {
          return (
            <div key={idx}>
              <h2>{data.title}</h2>
              <p>{data.completed}</p>
            </div>
          );
        })}
    </div>
  );
};
