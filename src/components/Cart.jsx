import React from "react";
import { MdDelete } from "react-icons/md";

const Cart = ({ cartAllProduct, setCartAllProduct }) => {
  const handleIncrement = (id) => {};
  const handleDecrement = () => {};
  const handleDelete = (id) => {
    const filterItem = cartAllProduct?.filter((item) => item.id !== id);
    setCartAllProduct(filterItem);
  };

  console.log("Cart Products:", cartAllProduct.id);
  return (
    <div className="containter-fluid">
      <div className="row p-3">
        {cartAllProduct.map((product) => {
          return (
            <div className="col-8 border rounded" key={product.id}>
              <div className="cart">
                <img className="cart-product-size" src={product.image} alt="" />
                <div className="content-cart">
                  <div>
                    <h3></h3>
                    <p className="cart-price">${product.price}</p>
                  </div>
                </div>
                <div className="cart-qty">
                  <p
                    className="border p-0 px-2 py-1 min-cart"
                    onClick={handleDecrement}
                  >
                    -
                  </p>
                  <p>{product.quantity}</p>
                  <p
                    className=" border p-0 px-2 py-1 max-cart"
                    onClick={handleIncrement}
                  >
                    +
                  </p>
                </div>
                <div className="cart-delete">
                  <p onClick={() => handleDelete(product.id)}>
                    <MdDelete />
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Cart;
