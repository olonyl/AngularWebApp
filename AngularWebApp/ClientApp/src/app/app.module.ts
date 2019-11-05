import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { HomeComponent } from './home/home.component';
import { CounterComponent } from './counter/counter.component';
import { EstudianteComponent } from './estudiante/estudiante.component';
import { EstudianteAddComponent } from './estudiante/estudiante-add/estudiante-add.component';
import { ReactiveFormsModule } from '@angular/forms';
import { EstudianteDetailComponent } from './estudiante/estudiante-detail/estudiante-detail.component';
import { EstudianteEditComponent } from './estudiante/estudiante-edit/estudiante-edit.component';

const appRoutes: Routes = [
  {
    path: 'estudiantes',
    component: EstudianteComponent,
    data: { title: 'Listado de Estudiantes' }
  },
  {
    path: 'estudiante-details/:id',
    component: EstudianteDetailComponent,
    data: { title: 'Informacion del Estudiante' }
  },
  {
    path: 'estudiante-add',
    component: EstudianteAddComponent,
    data: { title: 'Crear Estudiante' }
  },
  {
    path: 'estudiante-edit/:id',
    component: EstudianteEditComponent,
    data: { title: 'Editar Estudiante' }
  },
  {
    path: '',
    redirectTo: '/estudiantes',
    pathMatch: 'full'
  }
];

@NgModule({
  declarations: [
    AppComponent,
    NavMenuComponent,
    HomeComponent,
    CounterComponent,
    EstudianteComponent,
    EstudianteAddComponent,
    EstudianteDetailComponent,
    EstudianteEditComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
