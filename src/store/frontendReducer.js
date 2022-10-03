
let estadoinicial={ addForm:0 };
export const frontendReducer = (state=estadoinicial, action)=>{
let newstate={...state};
switch ( action.type) {
    case 'frontend/mostrar-add-form':
        newstate.addForm= ! newstate.addForm;
        break;
    case 'frontend/ocultar-add-form':
        newstate.addForm= 0;
        break;
}
return newstate;

}