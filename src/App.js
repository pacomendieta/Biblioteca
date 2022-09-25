//Componente App
// products[] = state con listado de productos


import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import axios from 'axios';
import './css/App.css';
import { Products } from './Componentes/Products/Products';
import { ProductDetail } from './Componentes/ProductDetail/ProductDetail.jsx';

function App() {


  return (
    <div>
    <Router>
      <Routes>
        <Route path='/' element={ <Products />}></Route>
        <Route path='/producto/:id' element={ <ProductDetail />}></Route>
      </Routes>

    </Router>
   
    </div>
  );
}

export default App;
