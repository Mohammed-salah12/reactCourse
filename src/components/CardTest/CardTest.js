import React from "react";
import "./CardTest.css";
export const CardTest = (props) => {
  return (
    <div className="cardContainer">
      <img src={props.productImg} alt="" />
      <h1>{props.productName}</h1>
      <p>{props.productPrice}</p>
    </div>
  );
};
