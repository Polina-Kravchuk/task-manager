import {Component, OnInit} from '@angular/core';
import {DashboardModel} from "../../models/dashboardModel";
import {DashboardStorageService} from "../../services/dashboard-storage.service";
import {ActivatedRoute} from "@angular/router";
import {TodoListModel} from "../../models/todoListModel";
import {TodoItemModel} from "../../models/todoItemModel";
import {AuthService} from "../../services/auth.service";

@Component({
  selector: 'app-dashboard-view-page',
  templateUrl: './dashboard-view-page.component.html',
  styleUrls: ['./dashboard-view-page.component.scss']
})
export class DashboardViewPageComponent implements OnInit {

  dashboardView: DashboardModel;

  // dashboardViewList: TodoListModel = {} as TodoListModel;

  // listName: string;

  constructor(private dashboardStorage: DashboardStorageService,
              private activateRoute: ActivatedRoute,
              public authService: AuthService) {

  }

  addList(listName:string) {
    const list = new TodoListModel();
    list.title = listName;
    list.items = [];
    this.dashboardView.lists.push(list);
    this.dashboardStorage.saveDashboard(this.dashboardView).subscribe();
  }

  DeleteList(list: TodoListModel){
    this.dashboardView.lists=this.dashboardView.lists.filter(e => e.title !== list.title)
    this.dashboardStorage.saveDashboard(this.dashboardView).subscribe();

  }

  DeleteItem(list: TodoListModel){
    this.dashboardStorage.saveDashboard(this.dashboardView).subscribe();
  }

  AddItemSave(list: TodoListModel){
    this.dashboardStorage.saveDashboard(this.dashboardView).subscribe();
  }

  ngOnInit(): void {
    const idTitle = this.activateRoute.snapshot.params['title'];

    this.dashboardStorage.getDashboard(idTitle).subscribe(e=> {
      this.dashboardView = e;
    });
    // this.dashboardView = this.dashboardStorage.getDashboard(idTitle);
    // console.log(this.dashboardView);
  }



}
