import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { FormularioComponent } from './component/formulario/formulario.component';
import { ProductosComponent } from './component/productos/productos.component';
import { ContactoComponent } from './pages/contacto/contacto.component';
import { SobreNosotrosComponent } from './pages/sobre-nosotros/sobre-nosotros.component';
import { ListaFormularioComponent } from './component/lista-formulario/lista-formulario.component';

export const routes: Routes = [
      { path: 'home', component: HomeComponent },
      { path: 'formulario', component: FormularioComponent },
      { path: 'productos', component: ProductosComponent },
    { path: 'contacto', component: ContactoComponent },
      { path: 'sobreNosotros', component: SobreNosotrosComponent },
      { path: 'lista-formulario', component: ListaFormularioComponent },
  { path: '**', redirectTo: 'home' },





];
