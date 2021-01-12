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
  isLoading: boolean;
  error: string;

  constructor(
    private router: Router,
    private dashboardStorage: DashboardStorageService) {

  }

  ngOnInit(): void {
  }

  addDashboard() {
    this.isLoading=true;
    this.dashboardStorage.createDashboard(this.dashboardTitle).subscribe(e=>{
      if (e.error) {
        this.error=e.error;
        this.isLoading = false;
      } else {
        this.isLoading = false;
        this.router.navigate(['/']);
      }
    });

    // this.dashboard.lists = [];
    // this.dashboardStorage.saveDashboard(this.dashboard);
    // this.router.navigate(['/']);
  }

}
