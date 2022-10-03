import '../../css/FormularioAdd.css';
import { useSelector} from 'react-redux';

  export const FormularioAdd=( props )=>{
      let campos = {id:'', title: ''};
      let visible = useSelector(state=>{
        console.log("FormularioAdd state:", state);
        return state.frontend.addForm;
      });


      let actualizaCampo=(e, campo )=>{ 
         campos[campo]=e.target.value;
      
       //console.log(campo,':',e.target.value) 
      }

    // enviaFormulario invoca a la funcion recibida en la propiedad fsubmit: props.fsubmit()
    let enviaFormulario =(e)=>{ 
      e.preventDefault();
      props.fsubmit({id:campos['id'],title:campos['title']});
      //console.log ( "Buscando Item...:", this.state)
    }
  
    return (
      <form className={`formularioAdd ${visible?"visible":"novisible"}`} >
      
         <input type='text'  placeholder='id'       name='id' 
                onChange={(e)=>actualizaCampo(e,'id')} />
       
       
         <input type='text'  placeholder='titulo'   name='title'
                onChange={(e)=>actualizaCampo(e,'title')} />
       
         <button type='submit'  onClick={ (e)=>enviaFormulario(e)}> ADD </button>
       </form>
      );
  }