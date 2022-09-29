//Componente PaginaRedux
//Renderiza la pagina /redux
import '../css/PaginaRedux.css';
import {useSelector} from 'react-redux';


import store from '../store';

// -- evento boton Añadir Producto
let addProducto=()=>{
    //console.log("Añadir producto");
    let estado = store.getState();
    let nuevoprod = { id: estado.total+1, titulo: 'titulo '+ (estado.total+1) };
    store.dispatch( {type:'productos/add', producto:nuevoprod } );
    //console.log("Nuevo estado:", store.getState());
}
// -- evento boton Quitar Producto
let delProducto=()=>{
    //console.log("Quitar producto");
    store.dispatch( {type:'productos/del'} );
    //console.log("Nuevo estado:", store.getState());
}


//---- PaginaRedux -------------------------//
export const PaginaRedux=()=>{
    console.log("Estado: ", store.getState());

    // -- EstadoVisual ---- //
    const EstadoVisual = ()=>{
        let estado = useSelector( (state)=>state );
        return (
            <>
            <p>Valores del estado</p>
            <p>Total: {estado.total}</p>
            <p>Productos</p>
            {  estado.productos.map( producto=>{ 
                return(<p>Titulo: {producto.titulo}</p>)
              
            })}

            </>

        )

    }
    // -- ControlesEstado ---- //
    const ControlesEstado = ()=>{
        return (
            <>
                <p>Controles del estado</p>
                <button onClick={ addProducto }>Añadir Producto</button>
                <button onClick={ delProducto }>Quitar Producto</button>
            </>
        )
    }


    return(
        <div className="paginaredux">
            <h1>Pagina Redux</h1>
            <div className='gridpaginaredux' >
                <div className='celdagrid'>
                    <h2>Estado</h2>
                    <EstadoVisual />
                </div>    
                <div className='celdagrid celdagrid2'>
                    <h2>Controles</h2>
                    <ControlesEstado />
                </div>
            </div>
        </div>
    )
}