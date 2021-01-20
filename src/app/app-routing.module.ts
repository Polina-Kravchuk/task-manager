import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomePageComponent} from "./pages/home-page/home-page.component";
import {DashboardAddPageComponent} from "./pages/dashboard-add-page/dashboard-add-page.component";
import {DashboardViewPageComponent} from "./pages/dashboard-view-page/dashboard-view-page.component";
import {LogInComponent} from "./pages/log-in/log-in.component";
import {RegistrationComponent} from "./pages/registration/registration.component";
import {AuthGuard} from "./services/auth.guard";

const routes: Routes = [{
  path:'',
  component: HomePageComponent,
  canActivate: [AuthGuard]
},{
  path:'add',
  component: DashboardAddPageComponent,
  canActivate: [AuthGuard]
},{
  path:'login',
  component: LogInComponent
},{
  path: 'registration',
  component: RegistrationComponent
},{
  path:':title',
  component: DashboardViewPageComponent,
  canActivate: [AuthGuard]
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
