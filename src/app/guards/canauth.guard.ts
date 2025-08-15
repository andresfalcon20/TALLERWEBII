import { CanDeactivateFn } from '@angular/router';
import { FormularioComponent } from '../component/formulario/formulario.component';

export const canauthGuard: CanDeactivateFn<FormularioComponent> = (component, currentRoute, currentState, nextState) => {
  
if(component.camposSinLlenar()){
  return confirm('Tienes datos sin llenar. ¿Seguro quieres abandonar el registro?');

}
return true;
}
