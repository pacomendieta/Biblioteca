import { Link } from "react-router-dom"
import '../css/PaginaHome.css';
import '../css/menus.css';
export const PaginaHome=()=>{
    return(
        <header>
            <h1>Aplicacion de Productos</h1>
            <div className="menuPrincipal">
                <Link to = '/producto/list'>Productos</Link>
                <Link to = '/producto/search'>Busqueda Productos</Link>
            </div>
        </header>
    )
}