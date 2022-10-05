import { useState } from "react";
import { FormularioSearch, FormularioSearch2, FormularioBasico } from "../Componentes/Products/FormularioSearch";
import '../css/PaginaSearch.css';
import { searchProductos } from "../Servicios/Productos";
import { ProductosSet } from "../Componentes/Products/ProductosSet";

let ResultadoSearch= ( {id, titulo} )=>{
    //let [resultado, setResultado] = useState([]);
    let x;
    console.log("inicio ResultadoSearch() busca: id, titulo:", id, titulo)
    searchProductos( {id: id, titulo:titulo } )
        .then( resultado=>x=resultado) 
    //.then( (res)=>setResultado(res) );
    
    
    return (
        <>
        <h2>Productos Encontrados:</h2>

        <ProductosSet productos={ x } />
        </>
    )
}




export const PaginaSearch = ()=>{
    console.log("Renderizando PaginaSearch()")
    let [buscado,setBuscado] = useState({id:'',titulo:''});

    let fsubmit=({id, titulo})=>{
        console.log("fsubmit() lanzado con valores:", id,titulo);
        setBuscado({id:id, titulo:titulo});    
    }





    return(
        <div className="paginaSearch">
            <h2>Página de búsqueda de Productos</h2>
            <FormularioSearch fsubmit={fsubmit} valores={buscado} />
            <p>Buscado: {buscado.id}  {buscado.titulo} </p>
            <ResultadoSearch id={buscado.id} titulo={buscado.titulo} ></ResultadoSearch>
        </div>
    )
}