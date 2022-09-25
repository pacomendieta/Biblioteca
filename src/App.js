//Componente App
// products[] = state con listado de productos


import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import axios from 'axios';
import './css/App.css';
import { Products } from './Componentes/Products/Products';

function App() {
  var [products, setProducts] = useState( [] );
  
  // Carga de productos en "products" llamndo al API
  useEffect(()=>{
    axios.get( "https://fakestoreapi.com/products", ).then((result)=>{
      setProducts(result.data);
      console.log("Result:", result.data);
      console.log("Productos Recibidos:", products);
    } )
  }, [ ]);

  return (
    <Products />

  );
}

export default App;
