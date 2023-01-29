import { Component, OnInit } from '@angular/core';
import Routers from '../shared/routes/Routes';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  public assessmentsEndpoint!: string;

  ngOnInit(): void {
    this.assessmentsEndpoint = `/${Routers.assessments}`
  }
}
