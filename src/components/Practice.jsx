import React, { useState } from "react";

const practice = () => {
  const products = [
    { title: "Cabbage", isFruit: false, id: 1 },
    { title: "Garlic", isFruit: false, id: 2 },
    { title: "Apple", isFruit: true, id: 3 },
  ];
  const [count, setCount] = useState(0);

  const handleClick = () => {
    setCount(count + 1);
  };
  return (
    <div>
      {products.map((products) => (
        <li key={products.id}>{products.title}</li>
      ))}
      <button onClick={handleClick}>Clicked {count} times</button>
    </div>
  );
};

export default practice;
