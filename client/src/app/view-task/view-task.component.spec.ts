import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewTaskComponent } from './view-task.component';

import { NgModule } from '@angular/core';
import{FormControl} from '@angular/forms';
import{FormsModule, ReactiveFormsModule} from '@angular/forms';
import { SearchtextPipe } from '../searchtext.pipe';
import {FilterparentPipe} from '../filterparent.pipe';
import { RouterModule } from '@angular/router';
import {HttpModule} from '@angular/http';
import { HttpClientModule } from '@angular/common/http/';
import {RouterTestingModule} from '@angular/router/testing';

describe('ViewTaskComponent', () => {
  let component: ViewTaskComponent;
  let fixture: ComponentFixture<ViewTaskComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewTaskComponent, SearchtextPipe, FilterparentPipe ],
      imports: [FormsModule, ReactiveFormsModule, RouterModule,
      HttpModule, HttpClientModule, RouterTestingModule ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewTaskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
