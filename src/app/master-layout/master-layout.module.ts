import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MasterLayoutRoutingModule } from './master-layout-routing.module';
import { SideNavComponent } from './side-nav/side-nav.component';
import { MasterLayoutComponent } from './master-layout.component';
import { DashboardComponent } from '../dashboard/dashboard.component';
import { AssessmentsComponent } from '../assessments/assessments.component';

@NgModule({
  declarations: [
    SideNavComponent,
    MasterLayoutComponent,
    DashboardComponent,
    AssessmentsComponent
  ],
  imports: [
    CommonModule,
    MasterLayoutRoutingModule
  ]
})
export class MasterLayoutModule { }
