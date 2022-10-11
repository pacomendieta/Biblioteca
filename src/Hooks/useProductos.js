// Custom Hook: useProductos()
// Recibe:   {id, titulo} --> parametros busqueda
// Retorna:  {loading, productos}   - Cada vez que cambie id o titulo -
//     loading: true/false, productos se están cargando desde source
//     productos: [{}]  array de productos cargados
import { useState, useEffect } from "react";
import { searchProductos } from "../Servicios/Productos";


export const useProductos=( props )=>{
    const {id, titulo} = props; //id,titulo = criterios busqueda
    let [productos,setProductos] = useState([]); //productos se cargan como permanentes
    const [loading, setLoading] = useState(false); //loading indica si carga en curso
    useEffect(()=>{
        // si id y titulo vacios recuperar último valor de localStorage
        var buscado = {id, titulo};
        if  (!id && !titulo) { buscado.id  = localStorage.getItem('ultimaBusqueda') }
        setLoading(true);
        searchProductos( buscado )
        .then((res)=>{ 
            setProductos(res);  
            localStorage.setItem('ultimaBusqueda', buscado.id )
            setLoading(false)
        });
       
    },[id,titulo])
    console.log("------HOOK useProductos() retorna:", loading, productos)
    return { loading, productos }
}  