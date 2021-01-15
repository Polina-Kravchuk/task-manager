import {Component, OnInit} from '@angular/core';
import {DashboardStorageService} from "../../services/dashboard-storage.service";
import {DashboardModel} from "../../models/dashboardModel";
import {AuthService} from "../../services/auth.service";
import {F} from "@angular/cdk/keycodes";
import {MatSnackBar} from '@angular/material/snack-bar';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {

  dashboards: string[] = [];
  isLoading: boolean;

  constructor(private dashboardStorage: DashboardStorageService,
              public authService: AuthService,
              private _snackBar: MatSnackBar) {
  }

  deleteDashboard(title: string) {
    this.isLoading = true;
    this.dashboardStorage.deleteDashboard(title).subscribe(e => {
      this.reloadData();
    }, error => {
      this._snackBar.open('Error 505: Internal Server Error',undefined, {
        duration: 2000});
      // to do : show error
      this.isLoading = false;
    });
  }

  ngOnInit() {
    // this.dashboards = this.dashboardStorage.getDashboardTitles();
    this.reloadData();
  }

  reloadData() {
    this.isLoading = true;
    this.dashboardStorage.getDashboardTitles().subscribe(e => {
      this.dashboards = e;
      this.isLoading = false;
    });
  }
}
