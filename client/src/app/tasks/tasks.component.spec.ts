import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { TasksComponent } from './tasks.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule } from '@angular/common/http/';
import {TaskService} from '../task.service';
import {DatePipe} from '@angular/common';
import { error } from 'util';
import {tasks} from '../task';
import {Observable} from 'rxjs';
import {debounceTime, map} from 'rxjs/operators';
import { BrowserModule } from '@angular/platform-browser';
//import { NgModule } from '@angular/core';
import {HttpModule} from '@angular/http';
import { AppRoutingModule } from '../app-routing.module';
import { AppComponent } from '../app.component';
import { RouterModule } from '@angular/router';
//import { Component, OnInit } from '@angular/core';
import { ViewTaskComponent } from '../view-task/view-task.component';
import {RouterTestingModule} from '@angular/router/testing';
import {SingleTaskComponent} from '../single-task/single-task.component';
import { SearchtextPipe } from '../searchtext.pipe';
import {FilterparentPipe} from '../filterparent.pipe';
import {Pipe, PipeTransform} from '@angular/core';




/*@NgModule ({
  declarations: [TasksComponent],
  entryComponents
})*/


describe('TasksComponent', () => {
  let component: TasksComponent;
  let fixture: ComponentFixture<TasksComponent>;


  class TestTaskComponent{
    tasks: tasks[] = [{
      Task_ID:"test",
      Parent_Task:"fse",
      Priority:10,
      Finished: false,
      Start_date: "28-12-2018",
      End_date: "30-12-2018"
    }];
  }

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TasksComponent, ViewTaskComponent, SingleTaskComponent,
      SearchtextPipe, FilterparentPipe ],
      imports : [FormsModule, NgbModule, HttpClientModule, BrowserModule,
         HttpModule, AppRoutingModule, RouterModule, RouterTestingModule],
      providers:[TaskService, DatePipe],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TasksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should have a defined component', () => {
    expect(component).toBeDefined();
  });

  it('should have a number property'), () => {
    expect(component.Priority).toEqual(0);
  }
  
});
