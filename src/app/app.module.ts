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
import {FormsModule} from "@angular/forms";
import {MatInputModule} from '@angular/material/input';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    DashboardViewPageComponent,
    DashboardAddPageComponent,
    TodoListComponentComponent,
    TodoItemComponentComponent
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        MatToolbarModule,
        MatIconModule,
        MatButtonModule,
        FormsModule,
        MatInputModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
