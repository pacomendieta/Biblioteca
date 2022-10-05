// Componente FormularioSearch
// props recibidas:   
//     fsubmit = funcion a ejecutar con el evento submit del formulario
// Formulario Renderizado:
//    campos id, titulo
import '../../css/FormularioSearch.css';
  export const FormularioSearch=( props )=>{
      let campos = {id:'', titulo: ''};

      let actualizaCampo=(e, campo )=>{ 
         campos[campo]=e.target.value;
      
       //console.log(campo,':',e.target.value) 
      }

    // enviaFormulario invoca a la funcion recibida en la propiedad fsubmit: props.fsubmit()
    let enviaFormulario =(e)=>{ 
      e.preventDefault();
      campos['id'] = document.querySelector("[name=id]").value;
      campos['titulo'] = document.querySelector("[name=titulo]").value;
      props.fsubmit({id:campos['id'],titulo:campos['titulo']});
      //console.log ( "Buscando Item...:", this.state)
    }
    const valor = props.valores.id;  
    return (
      <form className="formularioSearch">
      
         <input type='text'  placeholder='id'       name='id'  
                onChange={(e)=>actualizaCampo(e,'id')}  />
       
       
         <input type='text'  placeholder='titulo'   name='titulo'
                onChange={(e)=>actualizaCampo(e,'titulo')} />
       
         <button type='submit'  onClick={ (e)=>enviaFormulario(e)}> Buscar </button>
       </form>
      );
  }
  
