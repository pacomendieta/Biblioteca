//import productos from './productos';
import { getProductos } from '../Servicios/Productos';

// Cargar Productos desde el API
export var productos=[]; //Array contenedor productos carga inicial desde api


// ********************** VERSION SIMPLIFICADA ***********
const estadoinicial = {total:1,productos:[{id:1,titulo:'tituloUNO'}]};
export const productosReducer=(state=estadoinicial, action)=>{
    let newsta = JSON.parse( JSON.stringify( state ));

    switch (action.type) {
        case 'productos/reset':    // action: borrar productos del state.estadoProductos
            newsta.total=0;
            newsta.productos=[];
            break;
        case 'productos/init':    // action: cargar en state los productos del action.payload
            console.log("productos/init, action:", action);
            console.log("global productos:", productos);
            newsta.total=action.payload.length;
            newsta.productos=action.payload;
            break;
        case 'productos/initv2':    // action: cargar en state los productos del action.payload
            //console.log("productos/initv2, action:", action);
            //console.log("global productos:", productos);
            newsta.total=action.payload.length;
            newsta.productos=action.payload;
            break;
        case 'productos/add':   // action: añadir un nuevo producto del action.payload
            newsta.total++;
            newsta.productos.push(action.payload);
            break;
        case 'productos/del':  // action: borrar ultimo producto del state.estadoProductos
            if (newsta.total) {
                newsta.total--;
                newsta.productos.pop();  
            }
            break;
        default:
            return state;
    }
    return newsta;  
}

// Action Creator "productos/init" recibe prods= productos ya cargados previamente 
// initProductos retorna la action productos/init con payload=todos los productos del api
// puede ser llamada desde dispatcher ( initProductos() ) para la carga inicial
export const initProductos= (prods )=>{
    productos = [];
    if (prods) prods.map (prod=>productos.push(prod));
    return { type:"productos/init", payload: productos };
}

// Action Creator "productos/initv2" similar a "productos/init" pero de tipo Thunk: Retorna funcion asíncrona que carga los productos, y después retorna el objeto Action.
export const initProductosv2 = ( )=>{
    return async ( dispatcher )=>{
        const prods =   await getProductos();
        dispatcher( {type:"productos/initv2", payload: prods})
    }
}