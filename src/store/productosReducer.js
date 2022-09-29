import {   createAsyncThunk, createSlice } from '@reduxjs/toolkit'; 
import Axios from 'axios';

const urlapi = 'http://localhost:3001/productos';

// Crear Reducer de Productos
let estadoInicial = {
    total:1,
    productos:  [{id:1, titulo:"Producto1 de ProductReducer"}]
};

//funciones REDUCER ------------------------------------------------------
let addReducer=(state, action)=> {
    //console.log("..addReducer..");
    let newstate = state;
    newstate.total++;
    newstate.productos.push({id:action.producto.id, titulo:action.producto.titulo});
    return newstate;
}
let delReducer=(state, action)=> {
        //console.log("..delReducer..");
        let newstate = state;
        newstate.total = newstate.total ? newstate.total-1: 0;
        newstate.productos.pop();
        return newstate;
    
    return newstate;
}
let initReducer=(state, action)=> {
    //console.log("..initReducer..");
    let newstate = state;
    newstate.total = 0;
    newstate.productos = [];
    return newstate;

return newstate;
}


//--Reducer asincrono init
export const init = createAsyncThunk ('productos/init', async ({})=>{
    // SignIn asincrono
    //console.log("Dentro de signIn Action. Credenciales:", credenciales);
    let respuesta=await Axios.post(urlapi);
    //console.log("Respuesta servicio web"+`Config.servicioVideoapi/users/singIn en .data.user`, respuesta.data.user );
    return respuesta ? respuesta.data : null;
});



let init1=(state, action) => { 
    state.status="Cargando...";
    return state;
}
let init2=(state, action) => { 
    state.status="Cargados OK";
    state.productos = action.payload;
    return state;
}
let init3=(state, action) => { 
    return state;
}

//CREAR EL ESTADO DE PRODUCTOS:   productSlice ---------------------------
let productSlice = createSlice({
    name: 'productos',                  // nombre del slice en el debugger
    initialState: estadoInicial,        // estado inicial
    reducers: {    // reducers 'normales' es decir síncronos:            
        inits : initReducer,
        add: addReducer,
        del: delReducer
    },
    extraReducers: {                   // reducers que son de tipo asincrono. Un reducer por cada estado de la promise retornada por createAsyncThunk
        [init.pending]:  init1,
        [init.fulfilled]:init2,
        [init.rejected]: init3,

    }
})
console.log("productSlice Creado: ", productSlice);
console.log("Estado Inicial:", productSlice.getInitialState());

//Exportar los reducers del Slice 
export default productSlice.reducer;
