import { AuthGuard } from './guards/auth.guard';
import { NgModule } from '@angular/core';
import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './home/login/login.component';
import { IndexComponent } from './home/index/index.component';
import { NotFoundComponent } from './shared/components/404/404.component';

const appRoutes: Routes = [
  // { path: 'cursos', 
  //     loadChildren: 'app/cursos/cursos.module#CursosModule',
  //     canActivate: [AuthGuard],
  //     canActivateChild: [CursosGuard],
  //     canLoad: [AuthGuard]
  // },
  // { path: 'alunos',
  //     loadChildren: 'app/alunos/alunos.module#AlunosModule',
  //     canActivate: [AuthGuard],
  //     //canActivateChild: [AlunosGuard]
  //     canLoad: [AuthGuard]
  // },
  //{ path: 'cursos', component: CursosComponent },
  //{ path: 'curso/:id', component: CursoDetalheComponent },
  { path: 'login', component: LoginComponent },
  //{ path: 'naoEncontrado', component: CursoNaoEncontradoComponent },
  {
    path: 'home', component: IndexComponent,
    canActivate: [AuthGuard]
  },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: '**', component: NotFoundComponent } //, canActivate: [AuthGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }