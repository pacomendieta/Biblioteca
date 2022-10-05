
// comp <ProductosSet productos={productos}  />
// Pinta un listado de productos recibidos en la prop productos
import { ProductCard } from "../ProductCard/ProductCard";

export const  ProductosSet =( { productos } )=>{
    console.log("Renderizando <ProductosSet /> productos=",productos);
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