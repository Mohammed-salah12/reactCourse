import React, { useState } from "react";

export const ObjectState = () => {
  const [user, setUser] = useState({
    name: "",
    age: "",
    city: "",
  });
  const handleInputs = (e) => {
    const { value, name } = e.target; //exporting the value and the name form the event object

    setUser({ ...user, [name]: value });
  };

  return (
    <div>
      <input
        placeholder="enter name"
        type="text"
        name="name"
        value={user.name}
        onChange={handleInputs}
      />
      <input
        placeholder="enter age"
        type="number"
        name="age"
        value={user.age}
        onChange={handleInputs}
      />
      <input
        placeholder="enter city"
        type="text"
        name="city"
        value={user.city}
        onChange={handleInputs}
      />
      <ul>
        <li>name :{user.name}</li>
        <li>age:{user.age}</li>
        <li>city : {user.city}</li>
      </ul>
    </div>
  );
};
