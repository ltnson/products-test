import {Routes, Route, Navigate} from 'react-router-dom';

import ListProducts from './components/Product/ListProducts';
import NavBar from './components/Navbar/NavBar';

function App() {
  return (
    <div className="bg-white h-screen">
      <NavBar />
      <Routes>
        <Route path="/" element={<Navigate to="/products" />} />
        <Route path="/products" element={<ListProducts />} />
      </Routes>
    </div>
  );
}

export default App;
