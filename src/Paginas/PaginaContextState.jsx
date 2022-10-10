//Pagina que importa componente que crea estado con useContext

import { ContextoProductosProvider } from "../Hooks/ContextoProductos"
import { ListadoContext } from "../Hooks/Listado"


export const PaginaContext = ()=>{

    return (
        <div>
            <h1>Pagina Context</h1>
            <p>"Pagina Context que recibe un state creado con createContext/useContext"</p>
            <ContextoProductosProvider>
                <ListadoContext />
            </ContextoProductosProvider>
        </div>
    )
}


