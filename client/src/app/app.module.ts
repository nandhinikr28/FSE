import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';


import { TasksComponent } from './tasks/tasks.component';
import { RouterModule } from '@angular/router';
import { ViewTaskComponent } from './view-task/view-task.component';
import { SingleTaskComponent } from './single-task/single-task.component';



@NgModule({
  declarations: [
    AppComponent,
    TasksComponent,
    ViewTaskComponent,
    SingleTaskComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpModule,
    RouterModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
