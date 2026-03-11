import React, { createContext, useState } from "react";
import handbag from "../assets/Images/bag.avif";
import coolingGlass from "../assets/Images/cooling glass.avif";
import shoes from "../assets/Images/shoes.avif";
import watch from "../assets/Images/watch.avif";
import waterBottle from "../assets/Images/waterbottle.avif";
import nike from "../assets/Images/nikeShoe.jpg";
import smartWatch from "../assets/Images/smartWatch.avif";
import headphones from "../assets/Images/headphones.avif";

export const ProductContext = createContext();

const ProductList = ({ children }) => {
  const initialProducts = [
    { id: 1, name: "Handbag", price: 500, image: handbag },
    { id: 2, name: "Cooling Glass", price: 300, image: coolingGlass },
    { id: 3, name: "Shoes", price: 1000, image: shoes },
    { id: 4, name: "Watch", price: 800, image: watch },
    { id: 5, name: "WaterBottle", price: 600, image: waterBottle },
    {
      id: 6,
      name: "Nike Shoes",
      price: 2999,
      image: nike,
    },
    {
      id: 7,
      name: "Smart Watch",
      price: 1999,
      image: smartWatch,
    },
    {
      id: 8,
      name: "Headphones",
      price: 1499,
      image: headphones,
    },
  ];

  const [productList, setProductList] = useState(initialProducts);
  const [cartProduct, setCartProduct] = useState(0);
  const [selectedProduct, setSelectedProduct] = useState([]);

  const addTocart = (product) => {
    setSelectedProduct((prev) => {
      const alreadyExists = prev.find((item) => item.id === product.id);

      if (alreadyExists) {
        return prev; // do nothing if already added
      }
      setCartProduct((prev) => prev + 1);
      return [...prev, product];
    });
  };
  return (
    <ProductContext.Provider
      value={{
        productList,
        setProductList,
        addTocart,
        cartProduct,
        initialProducts,
        selectedProduct,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
};

export default ProductList;
