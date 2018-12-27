import { Component, OnInit } from '@angular/core';
import {TaskService} from '../task.service';
import {tasks} from '../task';
import {SearchtextPipe} from '../searchtext.pipe';
import{FormControl} from '@angular/forms';
import{FormsModule, ReactiveFormsModule} from '@angular/forms';
import {DatePipe} from '@angular/common';

@Component({
  selector: 'app-view-task',
  templateUrl: './view-task.component.html',
  styleUrls: ['./view-task.component.css'],
  providers: [TaskService, DatePipe]
})
export class ViewTaskComponent implements OnInit {

  Tasks = [];
  tasklist:any;
  users: tasks[] = [];
  Start_date:any;
  

  task: tasks = new tasks();
  //search:FormControl = new FormControl();
  results;
  response;

  constructor(private taskservice: TaskService, public datepipe: DatePipe) { 
    
    
  }
  deleteTask(id:any)
  {
    var tasks = this.Tasks;
    this.taskservice.deleteTask(id)
    .subscribe(data=>{
      if(data.n==1)
      {
        for (var i =0; i< tasks.length;i++)
        {
          if(tasks[i]._id == id)
          {
            tasks.splice(i,1);
          }
        }
      }
    });
  }

  ngOnInit() {
    this.taskservice.getTasks()
   /* .subscribe( task =>
      this.Tasks = task
   )*/
   .subscribe((data: tasks[])=>{this.Tasks = data,
  this.tasklist = data});

    
   console.log("parent"+this.Tasks);
   console.log("child"+this.tasklist);
   
   

    /*  this.search.valueChanges
      .subscribe(search=>this.taskservice.search(search)
      .subscribe(response =>this.results =
      this.response.json().artists.items)
      )};*/
    };

}
