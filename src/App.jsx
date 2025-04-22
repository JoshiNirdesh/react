import "./App.css";
import { ToastContainer, toast, Zoom } from "react-toastify";
import "react-toastify/dist/ReactToastify.css"; // Important for styling
import Navbar1 from "./components/Navbar1";
import Footer from "./components/Footer";
import Login from "./components/Login";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import AboutUs from "./components/AboutUs";
import ContactUs from "./components/Contact";
import Signup from "./components/Signup";
import Gallery from "./components/Gallery";
import UserList from "./components/UserList";
import UserDetail from "./components/UserDetail";
import ProductState from "./Context/ProductState";
import Shop from "./components/Shop";
import Cart from "./components/Cart";
import { useEffect, useState } from "react";
import product from "./data/data";
import Practice from "./components/Practice";
product;
function App() {
  const [productId, setProductId] = useState("");
  const [cartAllProduct, setCartAllProduct] = useState([]);
  useEffect(() => {
    if (productId) {
      const foundProduct = product.find((p) => p.id == productId);
      if (foundProduct) {
        setCartAllProduct((prev) => [...prev, foundProduct]);
      }
    }
  }, [productId]);

  return (
    <>
      <ProductState>
        <Router>
          <Navbar1 cartAllProduct={cartAllProduct} />
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/login" element={<Login />}></Route>
            <Route path="/about-us" element={<AboutUs />}></Route>
            <Route path="/contact" element={<ContactUs />}></Route>
            <Route path="/sign-up" element={<Signup />}></Route>
            <Route path="/gallery" element={<Gallery />}></Route>
            <Route path="/user-list" element={<UserList />}></Route>
            <Route
              path="/:id/:name/:occupation"
              element={<UserDetail />}
            ></Route>
            <Route
              path="/shop"
              element={<Shop setProductId={setProductId} />}
            ></Route>
            <Route
              path="/cart"
              element={
                <Cart
                  cartAllProduct={cartAllProduct}
                  setCartAllProduct={setCartAllProduct}
                />
              }
            ></Route>
            <Route path="/practice" element={<Practice />}></Route>
          </Routes>
          <Footer />
        </Router>
      </ProductState>
    </>
  );
}

export default App;
