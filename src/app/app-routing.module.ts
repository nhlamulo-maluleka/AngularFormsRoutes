import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './guards/auth.guard';
import Routers from './shared/routes/Routes';
import { LoginComponent } from './usermanagement/login/login.component';

const routes: Routes = [
  {
    path: Routers.login,
    component: LoginComponent
  },
  {
    path: '',
    canActivate: [AuthGuard],
    loadChildren: () =>
      import('./master-layout/master-layout.module').then(c => c.MasterLayoutModule)
  },
  {
    path: '**',
    redirectTo: Routers.login,
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
