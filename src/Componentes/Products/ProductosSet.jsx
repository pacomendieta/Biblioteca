
// comp <ProductosSet productos={productos}  />
// Pinta un listado de productos recibidos en la prop productos
import { searchProductos } from "../../Servicios/Productos";
import { ProductCard } from "../ProductCard/ProductCard";
import { useEffect, useState } from "react";

export const  ProductosSet =( {productos} )=>{
    console.log("ProductosSet recibe esto:", productos)
    return (
        <div >
            { productos && productos.map( producto=>
                {
                    <ProductCard 
                        id={producto.id}
                        titulo={producto.title}
                        imagen={producto.image}
                    />

                } )
            }
            { !productos && <p>No se encontraron productos</p>}

        </div>
    )
} 