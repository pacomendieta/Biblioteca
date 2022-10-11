//Componente PaginaRedux
//Renderiza la pagina /redux
import '../css/PaginaRedux.css';
import {useSelector} from 'react-redux';
import { Link } from "react-router-dom";
import {initProductosv2 } from '../store/productosReducerv2';
import {addProducto } from '../Servicios/Productos';
import react from 'react';
import { FormularioAdd } from '../Componentes/Products/FormularioAdd';

//---- PaginaRedux -----------------------------------------------------//
export const PaginaRedux=({store})=>{
    console.log("Estado: ", store.getState());
    let estado = store.getState().estadoProductos;
    console.log("Estado Productos:", estado);

    //Cargar Productos cuando se renderiza el componente por primera vez con readt.useEffect()
    react.useEffect( ()=>{
        console.log("Renderizada Pagina Redux");
        store.dispatch ( initProductosv2( ));

        return ;
        // Version antigua:
        /* 
        let prods=[];
        async function carga() {
            prods =   await getProductos(); 
            console.log("useEffect prods:", prods);
            store.dispatch( initProductos( prods ));
        }
        
        //prods =   await getProductos();
        //console.log('initBoton()');
        //let productos = await getProductos();
        carga();
        console.log("Cargando productos en useEffect:", prods);
        //store.dispatch( {type:'productos/load', payload:productos} );
        //store.dispatch( initProductos( prods ));
        //console.log("Nuevo estado:", store.getState());
        */
    }, [ ]);



    let botonReset=()=>{

        //console.log("Init: cargar productos");
        store.dispatch( {type:'productos/reset'} );
        //console.log("Nuevo estado:", store.getState());
    }
    
    // -- evento boton Añadir Producto
    let addBoton=async ()=>{

    
        //console.log("Añadir producto");
        //let estado = store.getState();
        
        store.dispatch ( {type: 'frontend/mostrar-add-form'} );

        //meterlo en la bd de json-server
        //res = await addProducto( nuevoprod );         
        //meterlo en el state
        //store.dispatch( {type:'productos/add', payload :nuevoprod } );
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
        store.dispatch( initProductosv2( ));
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
                return(<p key={producto.id}>Titulo: {producto.title}</p>)
              
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
                <button onClick={ addBoton }>Form Añadir Producto</button>
                <button onClick={ delProducto }>Quitar Producto</button>
            </>
        )
    }
    let enviarForm=async ({id,title})=>{
       if ( !id || !title) return;
       store.dispatch ( {type: 'frontend/ocultar-add-form'} );
       let nuevoprod = { id: id, title: title };
       store.dispatch( {type:'productos/add', payload :nuevoprod } );
       await addProducto( nuevoprod ); 
    }

    return(
        <div className="paginaredux">
            <h1>Pagina Redux</h1>
            <p className='resumen'>
                Utiliza Redux: state.estadoProductos / state.frontend.<br></br>
                El div izquierdo se actualiza ante cambios de estadoProductos.<br></br>
                El div derecho realiza llamadas a Actions sobre el estado.<br></br>
                Productos se carga desde api externo (simulado en localhost:3001 con json-server y fichero src/bdproductos.json).<br></br>

            </p>
            <div className='gridpaginaredux' >
                <div className='celdagrid'>
                    <h2>Estado (EstadoVisual)</h2>
                    <EstadoVisual />
                </div>    
                <div className='celdagrid celdagrid2'>
                    <h2>Controles (ControlesEstdo)</h2>
                    <ControlesEstado />
                    <FormularioAdd fsubmit={enviarForm} />
        

                </div>
   
            </div>
        </div>
    )
}