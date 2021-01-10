import {Injectable} from '@angular/core';
import {DashboardModel} from "../models/dashboardModel";
import {Observable} from "rxjs";
import {environment} from "../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {map} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class DashboardStorageService {

  constructor(private http: HttpClient) {
  }

  getDashboard(title: string): Observable<DashboardModel> {
    return this.http.get<DashboardModel>(`${environment.serverUrl}/dashboard/${title}`);
    // const json = localStorage.getItem(title);
    // if (json) {
    //   return JSON.parse(json);
    // } else {
    //   return undefined;
    // }
  }

  getDashboardTitles(): Observable<string[]> {
    return this.http.get<string[]>(`${environment.serverUrl}/dashboard`);
    // const length = localStorage.length;
    // var res=[];
    // for (var i=0; i<length; i++) {
    //   res.push(localStorage.key(i))
    // }
    // return res;
  }

  createDashboard(title: string): Observable<any> {
    return this.http.post(`${environment.serverUrl}/dashboard`, {
      title: title
    })
  }

  saveDashboard(item: DashboardModel): Observable<any>  {
    return this.http.put(`${environment.serverUrl}/dashboard`,item)
    // const json = JSON.stringify(item);
    // localStorage.setItem(item.title, json);
  }
}
