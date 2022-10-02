//Interfaz con api externo de productos
import axios from 'axios';

let apiurl = 'http://localhost:3001/productos';
export const getProductos= async ()=>{
    let resp = await axios.get(apiurl);
    //console.log("getProductos():", resp.data);
    let res = resp.data.map((producto)=>{return {id:producto.id, titulo:producto.title}});
    return res;
}