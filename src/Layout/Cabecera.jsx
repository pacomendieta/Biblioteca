import { Link } from "react-router-dom";
import '../css/Cabecera.css';

//Comp Header = Cabecera de la aplicacion
export const Cabecera=()=>{
    return(
        <header>
            <h1>Aplicacion de Productos</h1>
            <div className="menuPrincipal">
                <Link to = '/producto/list'>Productos</Link>
                <Link to = '/producto/search'>Busqueda Productos</Link>
                <Link to = '/redux'>Pagina Redux</Link>
            </div>
        </header>
    )
}
