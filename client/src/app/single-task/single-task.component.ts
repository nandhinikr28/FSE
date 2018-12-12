import { Component, OnInit } from '@angular/core';
import {TaskService} from '../task.service';
import {tasks} from '../task';
import{Http, Headers} from '@angular/http';
import { HttpClient } from '@angular/common/http';
import {HttpClientModule} from '@angular/common/http';
import { Router } from '@angular/router/';
import { ActivatedRoute } from '@angular/router/';



@Component({
  selector: 'app-single-task',
  templateUrl: './single-task.component.html',
  styleUrls: ['./single-task.component.css'],
  providers: [TaskService]
})
export class SingleTaskComponent implements OnInit {
  task = {};
  tasks:any = {};
  tasktoedit:any = {};
  apiMessage:string;
  id: number;
  private sub: any;
  Task: tasks;
  message;
  loading = true;
  newdata = [];

  constructor(private taskservice: TaskService, private http: HttpClient,
  private router: Router, private route: ActivatedRoute) { }

  
  ngOnInit() {
    this.sub = this.route.snapshot.params;
    console.log("id value =" +this.sub.id);
    this.taskservice.getTaskById(this.sub.id).subscribe(data => 
      this.newdata = data);
  

  }
/*  updateTask(Task:any):void{
    if(!Task){return;}
    Task.id =this.tasktoedit._id;
    console.log("Task id", Task.id);
    this.taskservice.updateTasks(Task)
          .then( td => {
            const updateTask = this.tasks.map(t=>{
              if(td.Task._id !== t._id){
                return t;
              }
              return { ...t, ...td.Task};
            })
            this.apiMessage = td.message;
            this.tasks = updateTask;
          })
  }
  
*/
  updateTask(){
    this.taskservice.updateTasks(this.newdata).subscribe(data =>{
      if(!data.success){
        this.apiMessage = "data not found";

      }else{
        this.apiMessage = "data found";
      }
    });
  }
}
