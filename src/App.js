//Componente App
// products[] = state con listado de productos


import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import axios from 'axios';
import './css/App.css';
import { Products } from './Componentes/Products/Products';
import { ProductDetail } from './Componentes/ProductDetail/ProductDetail.jsx';
import { PaginaSearch } from './Componentes/Products/PaginaSearch';
import { PaginaHome } from './Paginas/PaginaHome';

function App() {


  return (
    <div>
    <Router>
      <Routes>
        <Route path='/' element={<PaginaHome/>}></Route>
        <Route path='/producto/search' element={<PaginaSearch/>} />
        <Route path='/producto/list'   element={ <Products />}></Route>
        <Route path='/producto/:id'    element={ <ProductDetail />}></Route>
      </Routes>

    </Router>
   
    </div>
  );
}

export default App;
