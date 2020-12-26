import { Component, OnInit } from '@angular/core';
import {DashboardStorageService} from "../../services/dashboard-storage.service";
import {DashboardModel} from "../../models/dashboardModel";

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {

  dashboards: string[]=[];

  constructor(private dashboardStorage: DashboardStorageService) {
  }

  ngOnInit(): void {
    this.dashboards = this.dashboardStorage.getDashboardTitles();
  }

}
