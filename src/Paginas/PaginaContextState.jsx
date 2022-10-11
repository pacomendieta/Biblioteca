//Pagina que importa componente que crea estado con useContext

import { ContextoProductosProvider } from "../Hooks/ContextoProductos"
import { ListadoContext } from "../Hooks/Listado"
import '../css/PaginaContext.css'

export const PaginaContext = ()=>{

    return (
        <div className="paginacontext">
            <h1>Pagina Context</h1>
            <p className="resumen">"Pagina Context que recibe un state creado con createContext/useContext"</p>
            <ContextoProductosProvider>
                <ListadoContext />
            </ContextoProductosProvider>
        </div>
    )
}


