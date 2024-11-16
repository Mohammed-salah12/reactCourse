import React from "react";
import "./PropsTest.css";
import productImg from "../../images /iphone.jpeg";
export const PropsTest = () => {
  return (
    <div className="container">
      <div className="cardsHolder">
        <div className="contentHolder">
          <img src={productImg} alt="" />
          <h3>Name :iphone</h3>
          <p>price : 999$</p>
        </div>
        <div className="contentHolder">
          <img src={productImg} alt="" />
          <h3>Name :iphone</h3>
          <p>price : 999$</p>
        </div>
        
      </div>
    </div>
  );
};
