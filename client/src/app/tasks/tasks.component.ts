import { Component, OnInit } from '@angular/core';
import {TaskService} from '../task.service';
import {tasks} from '../task';
import {Observable} from 'rxjs';
import {debounceTime, map} from 'rxjs/operators';
import {Router} from '@angular/router';
import {DatePipe} from '@angular/common';
import { error } from 'util';
import { ViewTaskComponent } from '../view-task/view-task.component';


@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css'],
  providers: [TaskService, DatePipe]
})
export class TasksComponent implements OnInit {
  createTasks = [];
  task: tasks = new tasks();
  starting_date: any ={};
  ending_date:any ={};
  Priority: number=0;
  parents:{_id:string, Task_ID:string}[];
  //parents: {}[];
  search: any;
  formatter:any;
  selectedParent:{_id:string, Task_ID:string} = null;

  constructor(private taskservice: TaskService, private router: Router,
  public datepipe: DatePipe) { }


  ngOnInit() {
   this.ngBootstrapTypeahead();
 
    /*this.taskservice.getTasks()
    .subscribe( task =>
      this.createTasks = task);*/ //first method used
     this.taskservice.getTasks()
      .subscribe((data: tasks[])=>{
        console.log("data ",data);
          this.parents = data;
          console.log("value1 get", this.parents);
        
      });

      console.log("value get", this.parents);
      
      
  }

  /*findAllTasks(){
    this.taskservice.getTasks()
    .subscribe((res: any)=>{
      // console.log(res);
      if(res.success == true){
        this.parents = res.data;
      } else {
        console.log("error in finding all tasks");
      }
    })
  }*/


  ngBootstrapTypeahead(){
    console.log("parent"+this.parents);
    this.search = (text$: Observable<string>) =>
    //if(this.parents){
    text$.pipe(
      debounceTime(10),
      map(term => term === '' ? []
      : (this.parents).filter(Parent_Task => ((Parent_Task.Task_ID).toLowerCase()).indexOf(term.toLowerCase()) > -1))
    );
  //}
console.log("new search", this.search);
    this.formatter = (x: {Task_ID: string}) => {
      // // console.log(x);
      return x.Task_ID;
    };  
  }
  /*
  addTask(value) {
    const newTask = {
      Task_ID: value.Task_ID,
      Priority: value.Priority,
      Start_date: value.Start_date,
      End_date: value.End_date,
      Parent_Task: value.Parent_Task
    };
    console.log("priority value");
    this.taskservice.addTasks(newTask)
    .subscribe(task => {
      this.createTasks.push(task);
    }, error => {
      console.log('AddTask failed' +error);
    });
  } */
  addTask(value){
    console.log("date value", this.starting_date, this.ending_date);
    this.task.End_date = new Date(`${this.ending_date.year}/${this.ending_date.month}/${this.ending_date.day}`);
    this.task.Start_date = new Date(`${this.starting_date.year}/${this.starting_date.month}/${this.starting_date.day}`);

    // console.log(this.task);
    // console.log(this.selectedParent);

   
    if(!!this.selectedParent){
      this.task.Parent_Task = this.selectedParent._id;
      console.log("selected parent", this.task.Parent_Task);
    }

    console.log("task valus", this.task.Task_ID,  this.selectedParent ,  this.task.Priority );
    console.log("task vals", this.task.End_date ,this.task.Start_date , this.task.Finished);

    this.taskservice.addTasks(this.task)
    .subscribe((res: any)=>{
      console.log("res", res.success  );
      if(res){
        // console.log('valid')
        this.router.navigate(['/', 'view-task']);
      } else {
        alert('Invalid user'+res.error);
      }

      });
  }
}