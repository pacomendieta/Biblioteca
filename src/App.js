//Componente App
// products[] = state con listado de productos


import { useState, useEffect } from 'react';
import { ProductCard } from './Componentes/ProductCard';
import axios from 'axios';
import './css/App.css';

function App() {
  var [products, setProducts] = useState( [] );
  
  // Carga de productos en "products" llamndo al API
  useEffect(()=>{
    axios( "https://fakestoreapi.com/products", ).then((result)=>{
      setProducts(result.data);
      console.log("Result:", result.data);
      console.log("Productos Recibidos:", products);
    } )
  }, []);

  return (
    <div className="App">
      <h1>Listado de Productos</h1>
      {
        products && products.map( producto=>{
          return(
          <div key={producto.id}>  
          <ProductCard
            id = {producto.id}
            titulo={producto.title}
            precio={producto.price}
            image ={producto.image}          
          />
          </div>
          )
        })
      }
    </div>
  );
}

export default App;
