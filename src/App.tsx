import { Routes, Route, Navigate } from "react-router-dom";

import ListProducts from "./components/ListProducts";
import NavBar from "./components/NavBar";

function App() {
  return (
    <div>
      <NavBar />
      <Routes>
        <Route path="/" element={<Navigate to="/products" />} />
        <Route path="/products" element={<ListProducts />} />
      </Routes>
    </div>
  );
}

export default App;
