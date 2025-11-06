import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { CadastroComponent } from './cadastro/cadastro.component';
import { UserComponent } from './user/user.component'; 

export const routes: Routes = [
  { 
    path: '', 
    loadComponent: () => import('./home/home.component').then(m => m.HomeComponent) 
  },
  { 
    path: 'cadastro', 
    loadComponent: () => import('./cadastro/cadastro.component').then(m => m.CadastroComponent) 
  },
  { 
    path: 'login', 
    loadComponent: () => import('./login/login.component').then(m => m.LoginComponent) 
  },
  { 
    path: 'user', 
    loadComponent: () => import('./user/user.component').then(m => m.UserComponent) 
  },
 
  { path: '**', redirectTo: '' }
];

