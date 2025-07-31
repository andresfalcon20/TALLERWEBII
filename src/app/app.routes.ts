import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { FormularioComponent } from './component/formulario/formulario.component';
import { ProductosComponent } from './component/productos/productos.component';
import { ContactoComponent } from './pages/contacto/contacto.component';
import { SobreNosotrosComponent } from './pages/sobre-nosotros/sobre-nosotros.component';

export const routes: Routes = [
      { path: 'home', component: HomeComponent },
      { path: 'formulario', component: FormularioComponent },
      { path: 'productos', component: ProductosComponent },
    { path: 'contacto', component: ContactoComponent },
      { path: 'sobreNosotros', component: SobreNosotrosComponent },
  { path: '**', redirectTo: 'home' },





];
