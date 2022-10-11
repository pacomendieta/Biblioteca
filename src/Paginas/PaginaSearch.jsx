import React, { useEffect, useState } from "react";
import { FormularioSearch, FormularioSearch2, FormularioBasico } from "../Componentes/Products/FormularioSearch";
import '../css/PaginaSearch.css';
import { searchProductos } from "../Servicios/Productos";
import { ProductosSet } from "../Componentes/Products/ProductosSet";
import { ProductCard } from "../Componentes/ProductCard/ProductCard";
import { Spinner } from "../Componentes/Spinner";
import { useProductos } from "../Hooks/useProductos"; //custom Hook que carga y retorna productos

let ResultadoSearch= ( props )=>{
    const {id, titulo} = props;
    /*
    let [productos,setProductos] = useState([]);
    const [loading, setLoading] = useState(false);
    useEffect(()=>{
        console.log("useEffect...modificados id o titulo")
        setLoading(true);
        searchProductos( {id: id, titulo: titulo } )
        .then((res)=>{ setProductos(res); console.log("productos:", productos); setLoading(false)});
    },[id,titulo])
    */

    // custom hook, cada vez que cambie id,titulo, retorna loading (true/false) y array productos
    let {loading, productos} = useProductos( {id,titulo})
        
    //console.log("resultadoSearch se va a renderizar con productos=",productos);
    return (
        <>
        <h2>Productos Encontrados:</h2>
        { loading? <div>Cargando...<Spinner/></div> :<ProductosSet productos={productos} />
        }
          { !productos && <p>No se encontraron productos</p>}

        </>
    )
}




 const PaginaSearch = ()=>{
    console.log("Renderizando PaginaSearch()")
    let [buscado,setBuscado] = useState({id:'',titulo:''});

    let fsubmit=({id, titulo})=>{
        console.log("fsubmit() lanzado con valores:", id,titulo);
        setBuscado({id:id, titulo:titulo});    
    }





    return(
        <div className="paginaSearch">
            <h2>Página de búsqueda de Productos</h2>
            <div className="resumen">
                Arriba: <br></br>
                El formulario actualiza un estado local de la pagina: "buscado".<br></br>
                Abajo: ResultadoSearch<br></br>
                "buscado" se pasa por props al componente que busca 'ResultadoSearch' que a su vez llama al custom hook 'useProductos' para cargar resultados. <br></br>
                useProductos, utiliza useEffect para lanzar la busqueda solo cuando cambie el valor de "buscado". Retorna los productos y el indicador de si carga en curso.<br></br>
                Si la carga no esta en curso ResultadoSearch pinta los productos, y si no pinta un spinner.<br></br>


            </div>
            <FormularioSearch fsubmit={fsubmit} valores={buscado} />
            <p>Buscado: {buscado.id}  {buscado.titulo} </p>
            <ResultadoSearch id={buscado.id} titulo={buscado.titulo} ></ResultadoSearch>
        </div>
    )
}
export default PaginaSearch;  
// El export con React.memo hace que no se renderize PaginaSearch cuando la funcion retorne false
//export default React.memo(PaginaSearch,()=>false);