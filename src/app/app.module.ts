import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { DashboardViewPageComponent } from './pages/dashboard-view-page/dashboard-view-page.component';
import { DashboardAddPageComponent } from './pages/dashboard-add-page/dashboard-add-page.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatIconModule} from "@angular/material/icon";
import {MatButtonModule} from "@angular/material/button";
import { TodoListComponentComponent } from './components/todo-list-component/todo-list-component.component';
import { TodoItemComponentComponent } from './components/todo-item-component/todo-item-component.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MatInputModule} from '@angular/material/input';
import { CreateNewListComponent } from './components/create-new-list/create-new-list.component';
import { LogInComponent } from './pages/log-in/log-in.component';
import { RegistrationComponent } from './pages/registration/registration.component';
import {HTTP_INTERCEPTORS, HttpClient, HttpClientModule} from "@angular/common/http";
import {TokenInterceptorService} from "./services/token-interceptor.service";

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    DashboardViewPageComponent,
    DashboardAddPageComponent,
    TodoListComponentComponent,
    TodoItemComponentComponent,
    CreateNewListComponent,
    LogInComponent,
    RegistrationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    FormsModule,
    MatInputModule,
    ReactiveFormsModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptorService,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
