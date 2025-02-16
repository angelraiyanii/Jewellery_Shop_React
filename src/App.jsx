import "./App.css";
import Naverbar from "./component/naverbar";
import Contain from "./component/contain";
import Product from "./component/Product";
import Footer from "./component/Footer";
import Login from "./component/Login";
import Registor from "./component/Registor";
import Slider from "./component/Slider";
import SiglePro from "./component/SiglePro";
import Wishlist from "./component/Wishlist";
import Cart from "./component/Cart";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <Naverbar />

        <Routes>
          <Route path="/Slider" element={<Slider />} />
          <Route path="/contain" element={<Contain />} />
          <Route path="/Product" element={<Product />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/Registor" element={<Registor />} />
          <Route path="/Wishlist" element={<Wishlist />} />
          <Route path="/Cart" element={<Cart />} />
          <Route path="/SiglePro" element={<SiglePro />} />

        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
