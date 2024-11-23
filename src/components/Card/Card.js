import React from "react";
import "./Card.css";
export const Card = (props) => {
  return (
    <div className="CardHolder">
      <img src={props.productImage} />
      <h1>{props.productName}</h1>
      <p>{props.productPrice}</p>
    </div>
  );
};
