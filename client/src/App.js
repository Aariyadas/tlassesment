
import { BrowserRouter, Routes, Route } from "react-router-dom";
import {Toaster} from 'react-hot-toast'
import Menu from "./components/nav/Menu";
import Home from "./pages/Home";
import Login from "./pages/auth/Login";
import Register from "./pages/auth/Register";
import AdminDashboard from "./pages/admin/Dashboard";
import AdminCategory from "./pages/admin/Category";
import AdminProduct from "./pages/admin/Product";

import Shop from "./pages/user/shop";
 
function App() {
  return (
    <BrowserRouter>
     <Menu />
     <Toaster/>
      <Routes>
      
      <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/admin" element={<AdminDashboard />} />
        <Route path="/admin/category" element={<AdminCategory />} />
        <Route path="/admin/product" element={<AdminProduct />} />
       
        
        <Route path="/shop" element={<Shop />} />
        
      </Routes>
    </BrowserRouter>
  );
}


export default App;
