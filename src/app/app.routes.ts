import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AlumnosComponent } from './components/alumnos/alumnos.component';
import { ProfesoresComponent } from './components/profesores/profesores.component';

export const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'alumnos', component: AlumnosComponent },
  { path: 'profesores', component: ProfesoresComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: '**', redirectTo: '/home' },
];
