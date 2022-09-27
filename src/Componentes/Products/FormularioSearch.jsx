// Componente FormularioSearch
// props recibidas:   
//     fsubmit = funcion a ejecutar con el evento submit del formulario
// Formulario Renderizado:
//    campos id, titulo

  export const FormularioSearch=( props )=>{
      let campos = {id:'ID INICIAL', titulo: 'TITULO VACIO'};

      let actualizaCampo=(e, campo )=>{ 
         campos[campo]=e.target.value;
      
       //console.log(campo,':',e.target.value) 
      }

    // enviaFormulario invoca a la funcion recibida en la propiedad fsubmit: props.fsubmit()
    let enviaFormulario =(e)=>{ 
      e.preventDefault();
      props.fsubmit({id:campos['id'],titulo:campos['titulo']});
      //console.log ( "Buscando Item...:", this.state)
    }
  
    return (
      <form>
         <input type='text'  placeholder='id'       name='id' 
                onChange={(e)=>actualizaCampo(e,'id')}  />
         <input type='text'  placeholder='titulo'   name='titulo'
                onChange={(e)=>actualizaCampo(e,'titulo')} />
         <button type='submit'  onClick={ (e)=>enviaFormulario(e)}> Buscar </button>
       </form>
      );
  }
  
