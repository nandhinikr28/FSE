import { TestBed } from '@angular/core/testing';

import { TaskService } from './task.service';
import {HttpModule} from '@angular/http';
import { HttpClientModule } from '@angular/common/http/';
import { RouterModule } from '@angular/router';
import {RouterTestingModule} from '@angular/router/testing';

describe('TaskService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [ HttpClientModule,RouterModule, RouterTestingModule,
    HttpModule]
  }));

  it('should be created', () => {
    const service: TaskService = TestBed.get(TaskService);
    expect(service).toBeTruthy();
  });
});
