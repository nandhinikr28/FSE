import { Component, OnInit } from '@angular/core';
import {TaskService} from '../task.service';
import {tasks} from '../task';


@Component({
  selector: 'app-single-task',
  templateUrl: './single-task.component.html',
  styleUrls: ['./single-task.component.css'],
  providers: [TaskService]
})
export class SingleTaskComponent implements OnInit {
  tasks: tasks[];
  task: tasks;
  Task_ID:string;
    Start_date:Date;
    End_date:Date;
    Priority: number =0 ;
    Finished:boolean;
    Parent_Task:string;



  constructor(private taskservice: TaskService) { }

  deleteTask(id:any)
  {
    var tasks = this.tasks;
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

  }

}
