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