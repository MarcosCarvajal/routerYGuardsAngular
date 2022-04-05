import { FooterComponent } from './components/footer/footer.component';
import { ProductsComponent } from './components/products/products.component';
import { ProfileComponent } from './components/profile/profile.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { DashboardUsersComponent } from './components/dashboard-users/dashboard-users.component';
import { HeaderComponent } from './components/header/header.component';
import { IndexComponent } from './components/index/index.component';
//importamos el AuthGuard
import { AuthGuard } from './guards/auth.guard';

//RouteModule ... rutas importadas con rutes: Routes
import { RouterModule, Routes } from '@angular/router';

//Array de objetos donde cada ruta se almacenara aca
const rutas: Routes = [
  {
    path:'footer',
    component: FooterComponent
  },
  {
    //creo el nombre de la ruta
    path: 'profile',
    //llamo al componente perteneciente a la ruta (vista) .... tambien debo de importar el componente
    component: ProfileComponent
  },
  {
    //agregamos otra ruta llamada componente
    path: 'dashboard',
    component: DashboardComponent,
    children: [
    {
    //agregamos la ruta Hija
      path:'users',
      component: DashboardUsersComponent,
      //el canACtivate controla si un usuario puede acceder a una ruta ... puede recibir un array de guard
      //para este caso solo utilizaremos uno
      canActivate: [AuthGuard]
    }
  ]
  },
  {
    path: 'products',
    component: ProductsComponent
  },
  {
    //redireccionamiento de otras rutas
    //si el path va vacio (ruta principal), debemos colocar pathMatch: 'full' ya que esta ruta es la primera vacia y la principal
    path:'',
    pathMatch: 'full',
    //redirecTo va a redirigir la pagina principal a la ruta index
    redirectTo: 'index'
  },
  {
    path: 'index',
    component: IndexComponent
  }
]


@NgModule({
  //agregar los componentes a las declaraciones
  declarations: [
    AppComponent,
    DashboardComponent,
    DashboardUsersComponent,
    HeaderComponent,
    IndexComponent
  ],
  imports: [
    BrowserModule,
  //la constante rutas se la pasamos como parametro a forRoot para que este las manipule
  //adicional deberemos de crear el componente para la ruta -->  ng g c components/'nombreComponente' --skipTests
    RouterModule.forRoot(rutas, {
    //sirve para hacer un mejor debbugin de la aplicacion (rastreo de lo que esta sucediendo) por si ocurren problemas en la aplicacion
      // enableTracing: true,
      // useHash: true
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
