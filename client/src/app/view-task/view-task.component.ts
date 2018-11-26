import { Component, OnInit } from '@angular/core';
import {TaskService} from '../task.service';
import {tasks} from '../task';

@Component({
  selector: 'app-view-task',
  templateUrl: './view-task.component.html',
  styleUrls: ['./view-task.component.css'],
  providers: [TaskService]
})
export class ViewTaskComponent implements OnInit {

  Tasks = [];
  task: tasks = new tasks();

  constructor(private taskservice: TaskService) { 
    
    
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
    .subscribe( task =>
      this.Tasks = task);
  }

}
