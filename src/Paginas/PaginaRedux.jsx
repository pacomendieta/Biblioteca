//Componente PaginaRedux
//Renderiza la pagina /redux
import '../css/PaginaRedux.css';
import {useSelector, useDispatch} from 'react-redux';
import { Link } from "react-router-dom";
import { initProductos, productos } from '../store/productosReducerv2';
import { getProductos } from '../Servicios/Productos';


//---- PaginaRedux -----------------------------------------------------//
export const PaginaRedux=({store})=>{
    console.log("Estado: ", store.getState());
    let estado = store.getState().estadoProductos;
    console.log("Estado Productos:", estado);

    let botonReset=()=>{

        //console.log("Init: cargar productos");
        store.dispatch( {type:'productos/reset'} );
        //console.log("Nuevo estado:", store.getState());
    }
    
    // -- evento boton Añadir Producto
    let addProducto=()=>{
        //console.log("Añadir producto");
        //let estado = store.getState();
        let estado = store.getState().estadoProductos;
        let nuevoprod = { id: estado.total+1, titulo: 'titulo '+ (estado.total+1) };
        store.dispatch( {type:'productos/add', payload :nuevoprod } );
        //console.log("Nuevo estado:", store.getState());
    }
    // -- evento boton Quitar Producto
    let delProducto=()=>{
        //console.log("Quitar producto");
        store.dispatch( {type:'productos/del'} );
        //console.log("Nuevo estado:", store.getState());
    }
    // -- evento boton Load Productos
    let initBoton=  async ()=>{
        let prods=[];
        prods =   await getProductos();
        //console.log('initBoton()');
        //let productos = await getProductos();
        console.log("getProductos retorna:", prods);
        //store.dispatch( {type:'productos/load', payload:productos} );
        store.dispatch( initProductos( prods ));
        //console.log("Nuevo estado:", store.getState());
    }




    // -- EstadoVisual ---- //
    const EstadoVisual = ()=>{
        let estado = useSelector( (state)=>state.estadoProductos );
        console.log("EstadoVisual. estado=", estado);
        return (
            <>
            <p>Valores del estado</p>
            <p>Total: {estado.total}</p>
            <p>Productos</p>
            {  estado.productos && estado.productos.map( producto=>{ 
                return(<p key={producto.id}>Titulo: {producto.titulo}</p>)
              
            })}

            </>

        )

    }
    // -- ControlesEstado ---- //
    const ControlesEstado = ()=>{
        return (
            <>
                <p>Controles del estado</p>
                <button onClick={ botonReset }>RESET: borrar todos</button>
                <button onClick={ initBoton }>Init: Cargar Productos</button>
                <button onClick={ addProducto }>Añadir Producto</button>
                <button onClick={ delProducto }>Quitar Producto</button>
            </>
        )
    }


    return(
        <div className="paginaredux">
            <h1>Pagina Redux</h1>
            <Link to={'/'}> back to home</Link>
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