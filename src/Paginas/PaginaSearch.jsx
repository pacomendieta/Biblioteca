import { useState } from "react";
import { FormularioSearch, FormularioSearch2, FormularioBasico } from "../Componentes/Products/FormularioSearch";

export const PaginaSearch = ()=>{

    let fsubmit=({id, titulo})=>{
        console.log("fsubmit() lanzado con valores:", id,titulo);
        setResultado({id:id, titulo:titulo});    
    }

    const ResultadoSearch=( props )=>{
        return (
            <>
            <h2>Productos Encontrados:</h2>
            {resultado.id}  {props.resultado.titulo}
            </>
        )
    }



    let [resultado,setResultado] = useState({id:'1',titulo:'ENCONTRADO1'});
    return(
        <div className="paginaSearch">
            <h2>Página de búsqueda de Productos</h2>
            <FormularioSearch fsubmit={fsubmit} />
            <ResultadoSearch resultado={resultado} ></ResultadoSearch>
        </div>
    )
}