import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AssessmentsComponent } from '../assessments/assessments.component';
import { DashboardComponent } from '../dashboard/dashboard.component';
import { MasterLayoutComponent } from './master-layout.component';
import Routers from "../shared/routes/Routes"

const routes: Routes = [
  {
    path: '',
    component: MasterLayoutComponent,
    children: [
      {
        path: Routers.dashboard,
        component: DashboardComponent
      },
      {
        path: Routers.assessments,
        component: AssessmentsComponent
      },
      {
        path: '**',
        redirectTo: Routers.dashboard,
        pathMatch: 'full'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MasterLayoutRoutingModule { }
