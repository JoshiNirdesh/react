import React from "react";
import productContext from "./ProductContext";

const ProductState = (props) => {
  let fruit = {
    name: "apple",
    price: 100,
  };
  return (
    <productContext.Provider value={{ fruit }}>
      {props.children}
    </productContext.Provider>
  );
};

export default ProductState;
