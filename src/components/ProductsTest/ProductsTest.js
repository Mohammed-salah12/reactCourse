import React, { useState } from "react";
import { CardTest } from "../CardTest/CardTest";
import "./ProductsTest.css";
import iphoneImage from "../../assets/images/iphone.jpeg";

export const ProductsTest = () => {
  const [input, setInput] = useState("");
  const [sortType, setSortType] = useState("none");
  const products = [
    { productImg: iphoneImage, productName: "iPhone", productPrice: 300 },
    { productImg: iphoneImage, productName: "iPad", productPrice: 1000 },
    { productImg: iphoneImage, productName: "MacBook", productPrice: 2000 },
    { productImg: iphoneImage, productName: "AirPods", productPrice: 3000 },
    { productImg: iphoneImage, productName: "AirCloud", productPrice: 1000 },
  ];

  const handleInputChange = (e) => {
    const { value } = e.target;
    setInput(value.toLowerCase());
  };
  const handleSortChange = (e) => {
    const { value } = e.target;
    setSortType(value);
  };
  const filterdProducts = input
    ? products.filter((product) => {
        return product.productName.toLowerCase().includes(input); // filter the products based on input string
      })
    : products;

  const sortProducts = [...filterdProducts].sort((a, b) => {
    if (sortType === "price-desc") {
      return b.productPrice - a.productPrice;
    }
    if (sortType === "aphabatically") {
      return a.productName.localeCompare(b.productName);
    }
    return 0;
  });
  return (
    <div className="productsHolder">
      <select onChange={handleSortChange} value={sortType}>
        <option value="none">choose a sort type</option>
        <option value="price-desc">price : from high to low</option>
        <option value="aphabatically">aphabatical order </option>
      </select>
      <input type="text" onChange={handleInputChange} value={input} />
      {sortProducts.length != 0 &&
        sortProducts.map((product, idx) => (
          <CardTest
            key={idx}
            productImg={product.productImg}
            productName={product.productName}
            productPrice={product.productPrice}
          />
        ))}
      {sortProducts.length == 0 && (
        <p>No products found with the given input</p>
      )}
    </div>
  );
};
