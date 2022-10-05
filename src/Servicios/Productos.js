//Interfaz con api externo de productos
import axios from 'axios';

let apiurl = 'http://localhost:3001/productos';

export const getProductos= async ()=>{
    const res = await axios.get(apiurl)
    return res.data;
}

export const addProducto = async ( producto )=>{
    let res={};
    try {
        res = await axios.post(apiurl, producto);
    }catch(e) {
        console.log("ERROR:", e);
    }

    return res.data;
}

export const searchProductos=  async ({id,titulo})=>{
    console.log("   ini searchProductos() busca id,titulo:", id,titulo)
    if ( !id && !titulo) return [{ id:0, titulo:'No hay productos'}] ; 
    let url, res;
    if ( id )  url = apiurl + `/${id}`;
    else  titulo? url = apiurl + `?title=${titulo}` : url=apiurl;
    console.log("axios busca en: ", url);
    res = await axios.get(url);
    console.log("... axios en searcProductos retorna:", res.data)
    return res.data;
}