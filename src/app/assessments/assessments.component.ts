import { Component, OnInit } from '@angular/core';
import Routers from '../shared/routes/Routes';

@Component({
  selector: 'app-assessments',
  templateUrl: './assessments.component.html',
  styleUrls: ['./assessments.component.css']
})
export class AssessmentsComponent implements OnInit {
  public dashboardEndpoint!: string;

  ngOnInit(): void {
    this.dashboardEndpoint = `/${Routers.dashboard}`
  }
}
