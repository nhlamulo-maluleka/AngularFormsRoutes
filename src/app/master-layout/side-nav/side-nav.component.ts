import { Component } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import Routers from 'src/app/shared/routes/Routes';

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.css']
})
export class SideNavComponent {
  public assessmentsEndpoint!: string;
  public dashboardEndpoint!: string;
  public url!: string;

  constructor(private router: Router){}

  ngOnInit(): void {
    this.assessmentsEndpoint = `/${Routers.assessments}`
    this.dashboardEndpoint = `/${Routers.dashboard}`

    this.router.events.subscribe((event: any) => {
      if(event instanceof NavigationEnd){
        this.url = event.url
      }
    })
  }
}
