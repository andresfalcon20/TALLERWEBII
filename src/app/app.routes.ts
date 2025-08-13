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
      { path: '', redirectTo: 'login', pathMatch: 'full' },

  { path: 'home', component: HomeComponent, canActivate: [authGuard] },
  { path: 'formulario', component: FormularioComponent, canActivate: [authGuard] },
  { path: 'productos', component: ProductosComponent, canActivate: [authGuard] },
  { path: 'contacto', component: ContactoComponent, canActivate: [authGuard] },
  { path: 'sobreNosotros', component: SobreNosotrosComponent, canActivate: [authGuard] },
  { path: 'lista-formulario', component: ListaFormularioComponent, canActivate: [authGuard] },
  { path: 'clientes/:id', component: EditarFormularioComponent, canActivate: [authGuard] },

  { path: 'login', component: LoginComponent },
  { path: 'registro', component: RegistroUsuarioComponent },

  { path: '**', redirectTo: 'login' }




];
