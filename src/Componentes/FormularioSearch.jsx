export class FormularioSearch extends Component {
    constructor ( props ) {
      super( props );
      this.state = { id:'', titulo:''};
    }
    actualizaCampo=(e, campo )=>{ 
      let estado = this.state;
      estado[campo]= e.target.value; 
      this.setState(estado); 
      //console.log(campo,':',e.target.value) 
    }
    enviaFormulario =()=>{ console.log ( "Buscando Item...:", this.state)}
  
    render() {
      return (
      <form>
         <input type='email'    placeholder='Email'    value={this.state.email} onChange={(e)=>this.actualizaCampo(e,'id')}  />
         <input type='password' placeholder='Password' value={this.state.password} onChange={(e)=>this.actualizaCampo(e,'titulo')} />
         <button type='submit'  onClick={ ()=>this.enviaFormulario()}> Buscar </button>
       </form>
      );
    }
  }
 