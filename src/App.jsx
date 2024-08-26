import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import Header from "./componet/header/Header";
import Home from "./user/Home";
import UserOutlet from "./user/UserOutlet";
// import Footer from "./componet/footer/Footer";
import LoginRegister from "./componet/Login/LoginRegister";
// import "bootstrap/dist/css/bootstrap.min.css";
import Dashboard from "./Admin/dashboard/Dashboard";
import PrivateRoutes from "./Admin/PrivateRoutes";
import Main from "./Admin/main/Main";
import AddCategory from "./Admin/category/AddCategory";
import UpdateCategory from "./Admin/category/UpdateCategory";
import Category from "./Admin/category/Category";
import Product from "./Admin/product/Product";
import AddProduct from "./Admin/product/AddProduct";
import UpdateProduct from "./Admin/product/UpdateProduct";
import UserCategory from "./user/UserCategory";
import ProductDetails from "./user/ProductDetails";
import Cart from "./componet/Cart/Cart";
import Shipping from "./componet/Cart/Shipping";
import Confirmation from "./componet/Cart/Confirmation";
function App() {
  return (
    <>
      {/* <Header/> */}
      {/* <Footer/> */}
      <BrowserRouter>
        <Routes>
          <Route element={<PrivateRoutes />}>
            <Route path="/dashboard" element={<Dashboard />}>
              <Route path="/dashboard" element={<Main />}></Route>
              <Route path="/dashboard/category" element={<Category />} />
              <Route />
              <Route
                path="/dashboard/category/add"
                element={<AddCategory />}
              ></Route>
              <Route
                path="/dashboard/category/update/:id"
                element={<UpdateCategory />}
              ></Route>
              <Route path="/dashboard/product" element={<Product />}></Route>
              <Route
                path="/dashboard/product/add"
                element={<AddProduct />}
              ></Route>
              <Route
                path="/dashboard/product/update/:id"
                element={<UpdateProduct />}
              ></Route>
            </Route>
          </Route>

          <Route path="/" element={<UserOutlet />}>
            <Route path="/" element={<Home />}></Route>
            <Route path="/category/:id" element={<UserCategory />}></Route>
            <Route path="/products/:id" element={<ProductDetails />}></Route>
            <Route path="/cart" element={<Cart/>}></Route>
            <Route path="/checkout" element={<Shipping/>}></Route>
            <Route path="/confirm" element={<Confirmation/>}></Route>
            <Route path="/login" element={<LoginRegister />}></Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
