import { Component, OnInit } from '@angular/core';
import {DashboardModel} from "../../models/dashboardModel";
import {DashboardStorageService} from "../../services/dashboard-storage.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-dashboard-view-page',
  templateUrl: './dashboard-view-page.component.html',
  styleUrls: ['./dashboard-view-page.component.scss']
})
export class DashboardViewPageComponent implements OnInit {

  dashboardView: DashboardModel;

  constructor(private dashboardStorage: DashboardStorageService,
              private activateRoute: ActivatedRoute) { }

  ngOnInit(): void {
    const idTitle = this.activateRoute.snapshot.params['title'];
    this.dashboardView=this.dashboardStorage.getDashboard(idTitle);
  }

}
