import { TestBed, inject } from '@angular/core/testing';

import { TaskService } from './task.service';
import {HttpModule} from '@angular/http';
import { HttpClientModule } from '@angular/common/http/';
import { RouterModule } from '@angular/router';
import {RouterTestingModule} from '@angular/router/testing';
import { HttpClientTestingModule, HttpTestingController} from '@angular/common/http/testing';
import {tasks} from './task'
import {TaskParentSchema} from '../../../models/tasks';
import { HttpClient } from 'selenium-webdriver/http';
import {MockBackend} from '@angular/http/testing';



describe('TaskService', () => {
  let services:TaskService;
  let httpmock: HttpTestingController;

  beforeEach(() => {TestBed.configureTestingModule({
    imports: [ HttpClientModule,RouterModule, RouterTestingModule,
    HttpModule, HttpClientTestingModule],
    providers: [TaskService, {provide: HttpClient, deps:MockBackend}]
  });
  services = TestBed.get(TaskService);
  httpmock = TestBed.get(HttpTestingController)
});

  it('should be created', () => {
    const service: TaskService = TestBed.get(TaskService);
    expect(service).toBeTruthy();
  });

  it('should get data of tasks', () =>{
    var date = new Date('28-12-2018');
    var e_date = new Date('29-12-2018');
    const dummy: tasks[] = [{
      _id:"5c24ccf5bb4ef410e4793ed4",
      Task_ID:"123",
      Parent_Task:"5c21d5f2bb4ef410e4793ece",
      Priority:30,
      Finished: false,
      Start_date: date,
      End_date: e_date
    }];
services.getTaskById('5c24ccf5bb4ef410e4793ed4').subscribe(post => {
  expect(post.Task_ID).toBe(dummy.find(i=>i.Task_ID == '123').Task_ID);
})
  })
});
