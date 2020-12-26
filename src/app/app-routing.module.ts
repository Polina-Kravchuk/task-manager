import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomePageComponent} from "./pages/home-page/home-page.component";
import {DashboardAddPageComponent} from "./pages/dashboard-add-page/dashboard-add-page.component";
import {DashboardViewPageComponent} from "./pages/dashboard-view-page/dashboard-view-page.component";

const routes: Routes = [{
  path:'',
  component: HomePageComponent
},{
  path:'add',
  component: DashboardAddPageComponent
},{
  path:':title',
  component: DashboardViewPageComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
