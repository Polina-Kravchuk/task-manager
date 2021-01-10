import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {DashboardStorageService} from "../../services/dashboard-storage.service";
import {DashboardModel} from "../../models/dashboardModel";

@Component({
  selector: 'app-dashboard-add-page',
  templateUrl: './dashboard-add-page.component.html',
  styleUrls: ['./dashboard-add-page.component.scss']
})
export class DashboardAddPageComponent implements OnInit {

  // dashboard: DashboardModel = {} as DashboardModel;
  dashboardTitle: string;

  constructor(
    private router: Router,
    private dashboardStorage: DashboardStorageService) {

  }

  ngOnInit(): void {
  }

  addDashboard() {
    this.dashboardStorage.createDashboard(this.dashboardTitle).subscribe(e=>{
      this.router.navigate(['/']);
    });
    // this.dashboard.lists = [];
    // this.dashboardStorage.saveDashboard(this.dashboard);
    // this.router.navigate(['/']);
  }

}
