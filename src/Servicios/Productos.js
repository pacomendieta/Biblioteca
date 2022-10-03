//Interfaz con api externo de productos
import axios from 'axios';

let apiurl = 'http://localhost:3001/productos';

export const getProductos= async ()=>{
    const res = await axios.get(apiurl)
    
    return res.data;
}