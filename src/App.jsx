import "./App.css";
import Naverbar from "./component/naverbar";
import Contain from "./component/Contain";
import Product from "./component/Product";
import Footer from "./component/Footer";
import Login from "./component/Login";
import Register from "./component/Registor"; // Fix Spelling
import Slider from "./component/Slider";
import SiglePro from "./component/SiglePro";
import Wishlist from "./component/Wishlist";
import Cart from "./component/Cart";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AdPro from "./component/Admin/AdPro";
import AdCategory from "./component/Admin/AdCategory";
import Account from "./component/Account";

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
          <Route path="/Register" element={<Register />} /> {/* Fix Spelling */}
          <Route path="/Wishlist" element={<Wishlist />} />
          <Route path="/Cart" element={<Cart />} />
          <Route path="/SiglePro" element={<SiglePro />} />
          <Route path="/Account" element={<Account />} />
          <Route path="/Admin/AdCategory" element={<AdCategory />} />
          <Route path="/Admin/AdPro" element={<AdPro />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
