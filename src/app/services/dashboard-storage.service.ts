import {Injectable} from '@angular/core';
import {DashboardModel} from "../models/dashboardModel";

@Injectable({
  providedIn: 'root'
})
export class DashboardStorageService {

  getDashboard(title: string): DashboardModel {
    const json = localStorage.getItem(title);
    if (json) {
      return JSON.parse(json);
    } else {
      return undefined;
    }
  }

  getDashboardTitles(): string[]{
    const length = localStorage.length;
    var res=[];
    for (var i=0; i<length; i++) {
      res.push(localStorage.key(i))
    }
    return res;
  }

  saveDashboard(item:DashboardModel){
    const json = JSON.stringify(item);
    localStorage.setItem(item.title,json);
  }

  constructor() {
  }
}
