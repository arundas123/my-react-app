import React from 'react';
import './App.css'
import User from './components/header/User';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Admin from './components/admin/Admin';
import Products from './components/admin/pages/Products';
import AddProduct from './components/admin/pages/AddProduct';

function App() {

  return (
    <>
    <Router>
      <Routes>
          <Route path="/" element={<User />} />
          <Route path="/admin" element={<Admin/>}> </Route>
          <Route path="/pages/Products" element={<Products/>}> </Route>
          <Route path="/pages/AddProduct" element={<AddProduct/>}> </Route>
      </Routes>
    </Router> 
    </>
  )
}

export default App;







