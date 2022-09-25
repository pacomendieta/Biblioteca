//Componente Products
//Pinta listado de productos

import { ProductCard } from "../ProductCard/ProductCard";
import axios from "axios";
import { useEffect, useState } from "react";
import '../../css/Products.css';

export const Products=()=>{
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
      <div className="listadoProductos">
        <h1>Listado de Productos</h1>
        {
              products && products.map( producto=>{
                return(
                <ProductCard 
                  key = {producto.id}
                  titulo={producto.title}
                  precio={producto.price}
                  imagen ={producto.image}          
                />
                )
              })
            }
      </div>
    )
}