import { useEffect, useState } from "react";
import { FormularioSearch, FormularioSearch2, FormularioBasico } from "../Componentes/Products/FormularioSearch";
import '../css/PaginaSearch.css';
import { searchProductos } from "../Servicios/Productos";
import { ProductosSet } from "../Componentes/Products/ProductosSet";
import { ProductCard } from "../Componentes/ProductCard/ProductCard";
import { Spinner } from "../Componentes/Spinner";

let ResultadoSearch= ( props )=>{
    const {id, titulo} = props;
    let [productos,setProductos] = useState([]);
    const [loading, setLoading] = useState(false);
    useEffect(()=>{
        console.log("useEffect...modificados id o titulo")
        setLoading(true);
        searchProductos( {id: id, titulo: titulo } )
        .then((res)=>{ setProductos(res); console.log("productos:", productos); setLoading(false)});
    },[id,titulo])

    
    console.log("resultadoSearch se va a renderizar con productos=",productos);
    return (
        <>
        <h2>Productos Encontrados:</h2>
        { loading? <p>Cargando...<Spinner/></p> :<ProductosSet productos={productos} />
        }
          { !productos && <p>No se encontraron productos</p>}

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