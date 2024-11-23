import React, { useState } from "react";
import { Card } from "../Card/Card";
import "./ProductSection.css";
import ProductImage from "../../assets/images/iphone.jpeg";
export const ProductSection = () => {
  const [input, setInput] = useState("");
  const [sortType, setSortType] = useState("none");
  const products = [
    {
      id: 1,
      productName: "iphone",
      productPrice: 1000,
      productImage: ProductImage,
    },
    {
      id: 2,
      productName: "ipad",
      productPrice: 300,
      productImage: ProductImage,
    },
    {
      id: 3,
      productName: "airTag",
      productPrice: 200,
      productImage: ProductImage,
    },
    {
      id: 4,
      productName: "macbook",
      productPrice: 2000,
      productImage: ProductImage,
    },
    {
      id: 5,
      productName: "macbook",
      productPrice: 2000,
      productImage: ProductImage,
    },
  ];
  const handleInputChange = (e) => {
    const { value } = e.target;
    setInput(value.toLowerCase());
    console.log(input);
  };
  const handleSortChange = (e) => {
    const { value } = e.target;
    setSortType(value);
  };
  const filterProducts = input
    ? products.filter((product) => {
        return product.productName.toLowerCase().includes(input); // Filter the products based on input string
      })
    : products;

  const sortProducts = [...filterProducts].sort((a, b) => {
    if (sortType === "price-desc") {
      return b.productPrice - a.productPrice;
    }
    if (sortType === "alphatical") {
      return b.productName.localeCompare(a.productName);
    }
  });
  return (
    <div className="cardsContainer">
      <select onChange={handleSortChange} value={sortType}>
        <option value="none">select sortType</option>
        <option value="price-desc">price : high to low </option>
        <option value="alphatical">alphatical order </option>
      </select>
      <input type="text" onChange={handleInputChange} value={input} />
      {sortProducts.length > 0 ? (
        sortProducts.map((product, id) => {
          return (
            <Card
              key={product.id}
              productImage={product.productImage}
              productName={product.productName}
              productPrice={product.productPrice}
            /> // Add the key prop to each Card component to avoid re-rendering unnecessarily
          );
        })
      ) : (
        <p>no products found with the given input</p>
      )}
    </div>
  );
};
