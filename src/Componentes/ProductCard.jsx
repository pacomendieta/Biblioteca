import "../css/productcard.css";
export const ProductCard = ({titulo, precio, imagen, id})=>{
    return (
        <div key={id}>
            <a href="#">{titulo}</a>
            <img className="imagenProducto" src={imagen} alt="Imagen de producto"></img>
            <p>Precio:{precio}</p>
        </div>
    )
}