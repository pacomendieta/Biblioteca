// Custom Hook: useProductos()
// Recibe:   {id, titulo} --> parametros busqueda
// Retorna:  {loading, productos}   - Cada vez que cambie id o titulo -
//     loading: true/false, productos se están cargando desde source
//     productos: [{}]  array de productos cargados
import { useState, useEffect } from "react";
import { searchProductos } from "../Servicios/Productos";


export const useProductos=( props )=>{
    const {id, titulo} = props;
    let [productos,setProductos] = useState([]);
    const [loading, setLoading] = useState(false);
    useEffect(()=>{
        setLoading(true);
        searchProductos( {id: id, titulo: titulo } )
        .then((res)=>{ setProductos(res);  setLoading(false)});
    },[id,titulo])
    console.log("------HOOK useProductos() retorna:", loading, productos)
    return { loading, productos }
}  