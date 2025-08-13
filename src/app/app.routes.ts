import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { FormularioComponent } from './component/formulario/formulario.component';
import { ProductosComponent } from './component/productos/productos.component';
import { ContactoComponent } from './pages/contacto/contacto.component';
import { SobreNosotrosComponent } from './pages/sobre-nosotros/sobre-nosotros.component';
import { ListaFormularioComponent } from './component/lista-formulario/lista-formulario.component';
import { EditarFormularioComponent } from './editar-formulario/editar-formulario.component';
import { LoginComponent } from './component/login/login.component';
import { RegistroUsuarioComponent } from './component/registro-usuario/registro-usuario.component';
import { authGuard } from './guards/auth.guard';

export const routes: Routes = [
      { path: 'home', component: HomeComponent },
      { path: 'formulario', component: FormularioComponent },
      { path: 'productos', component: ProductosComponent, canActivate: [authGuard] },
    { path: 'contacto', component: ContactoComponent },
      { path: 'sobreNosotros', component: SobreNosotrosComponent },
      { path: 'lista-formulario', component: ListaFormularioComponent },
      { path: 'login', component: LoginComponent },
      { path: 'registro', component: RegistroUsuarioComponent },
{ path: 'clientes/:id', component: EditarFormularioComponent },
  { path: '**', redirectTo: 'home' },





];
