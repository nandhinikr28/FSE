import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleTaskComponent } from './single-task.component';
//import{FormControl} from '@angular/forms';
import{FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import { HttpClientModule } from '@angular/common/http/';
import { RouterModule } from '@angular/router';
import {TaskService} from '../task.service';
import {RouterTestingModule} from '@angular/router/testing';


describe('SingleTaskComponent', () => {
  let component: SingleTaskComponent;
  let fixture: ComponentFixture<SingleTaskComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SingleTaskComponent ],
      imports: [ FormsModule, ReactiveFormsModule, HttpModule,
      HttpClientModule,RouterModule, RouterTestingModule ],
      providers: [TaskService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SingleTaskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
