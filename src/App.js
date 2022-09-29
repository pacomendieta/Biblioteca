//Componente App
// products[] = state con listado de productos


import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import axios from 'axios';
import './css/App.css';
import { ProductsList } from './Componentes/Products/ProductosList';
import { ProductDetail } from './Componentes/ProductDetail/ProductDetail.jsx';
import { PaginaSearch }  from './Paginas/PaginaSearch';
import { PaginaHome } from './Paginas/PaginaHome';
import { PaginaRedux } from './Paginas/PaginaRedux';
import store from './store';    
import { Provider} from 'react-redux';

function App() {


  return (
    <div>
    <Provider store={store} >
      <Router>
        <Routes>
          <Route path='/' element={<PaginaHome/>}></Route>
          <Route path='/producto/search' element={<PaginaSearch/>} />
          <Route path='/producto/list'   element={ <ProductsList />}></Route>
          <Route path='/producto/:id'    element={ <ProductDetail />}></Route>
          <Route path='/redux'           element={ <PaginaRedux />} />
        </Routes>

      </Router>
    </Provider>
    </div>
  );
}

export default App;
