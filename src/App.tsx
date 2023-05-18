import { Routes, Route, Navigate } from "react-router-dom";

import ListProducts from "./components/ListProducts";
import NavBar from "./components/NavBar";
import EditProduct from "./components/EditProduct/EditProduct";
import AddProduct from "./components/addProduct/AddProduct";
import StationDetail from "./components/stationDetail/StationDetail";

function App() {
  return (
    <div>
      <NavBar />
      <Routes>
        <Route path="/" element={<Navigate to="/products" />} />
        <Route path="/products" element={<ListProducts />} />
        <Route path="/edit-product/:id" element={<EditProduct />} />
        <Route path="/add-product" element={<AddProduct />} />
        <Route path="/station-detail/:id" element={<StationDetail />} />
      </Routes>
    </div>
  );
}

export default App;
