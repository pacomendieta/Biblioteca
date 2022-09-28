// Crear Reducer de Productos
let estadoInicial = {
    total:0,
    productos:  []
};

//funciones REDUCER ------------------------------------------------------

//--Reducer asincrono listado
export const listado = createAsyncThunk ('productos/listado', async ({})=>{
    // SignIn asincrono
    //console.log("Dentro de signIn Action. Credenciales:", credenciales);
    let respuesta=await Axios.post(``,{});
    //console.log("Respuesta servicio web"+`Config.servicioVideoapi/users/singIn en .data.user`, respuesta.data.user );
    return respuesta ? respuesta.data : null;
})
let listado1=(state, action) => { 
    return state;
}
let listado2=(state, action) => { 
    return state;
}
let listado3=(state, action) => { 
    return state;
}

//CREAR EL ESTADO DE PRODUCTOS:   productSlice ---------------------------
let productSlice = createSlice({
    name: 'productos',                  // nombre del slice en el debugger
    initialState: estadoInicial,        // estado inicial
    reducers: {                         // reducers 'normales' es decir síncronos: 
        add: addReducer,
        del: delReducer
    },
    extraReducers: {                   // reducers que son de tipo asincrono. Un reducer por cada estado de la promise retornada por createAsyncThunk
        [listado.pending]:  listado1,
        [listado.fulfilled]:listado2,
        [listado.rejected]: listado3,

    }
})