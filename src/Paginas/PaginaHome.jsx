import { Link } from "react-router-dom"
import '../css/PaginaHome.css';
import '../css/menus.css';
import { Cabecera } from "../Layout/Cabecera";
export const PaginaHome=()=>{
    return(
        <>
        <header>
            <h1>HOME. Aplicacion de Productos</h1>
            <div className="menuPrincipal">
                <Link to = '/producto/list'>Productos</Link>
                <Link to = '/producto/search'>Busqueda Productos</Link>
                <Link to = '/redux'>Pagina Redux</Link>
            </div>
        </header>
        </>
    )
}