import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';


import { TasksComponent } from './tasks/tasks.component';
import { RouterModule } from '@angular/router';
import { ViewTaskComponent } from './view-task/view-task.component';
import { SingleTaskComponent } from './single-task/single-task.component';
import { HttpClientModule } from '@angular/common/http/';
import { SearchtextPipe } from './searchtext.pipe';
import { FilterparentPipe } from './filterparent.pipe';




@NgModule({
  declarations: [
    AppComponent,
    TasksComponent,
    ViewTaskComponent,
    SingleTaskComponent,
    SearchtextPipe,
    FilterparentPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpModule,
    HttpClientModule,
    RouterModule,
    ReactiveFormsModule,
    NgbModule,
  ],
  entryComponents: [ViewTaskComponent],
  exports:[SearchtextPipe],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
