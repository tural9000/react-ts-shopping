import { Routes, Route } from "react-router-dom";
import ProductCard from "../components/card/ProductCard";
import ProductDetail from "../components/product-detail/ProductDetail";
import Products from "../components/products/Products";
import SignIn from "../components/register/CheckIn";
import About from "../pages/about-page/About";
import Contact from "../pages/contact/Contact";

const MyRouter = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Products />} />
        <Route path={`/card`} element = {<ProductCard/>} />
        <Route path={`/signIn`} element = {<SignIn/>} />
        <Route path={`/product/:product_id`} element = {<ProductDetail/>} />
        <Route path={`/hakkimizda`} element = {<About/>} />
        <Route path={`/iletisim`} element = {<Contact/>} />
      </Routes>
    </div>
  );
};

export default MyRouter;
