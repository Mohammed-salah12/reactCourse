import React, { useEffect, useState } from "react";

export const LocalStorageTest = () => {
  const [name, setName] = useState("");
  useEffect(() => {
    localStorage.setItem("name", name);
  }, [name]);
  return (
    <div>
      <input type="text" onChange={(e) => setName(e.target.value)} />
      <div>{localStorage.getItem("name")}</div>
    </div>
  );
};
