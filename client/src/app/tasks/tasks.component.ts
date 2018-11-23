import { Component, OnInit } from '@angular/core';
import {TaskService} from '../task.service';
import {tasks} from '../task';


@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css'],
  providers: [TaskService]
})
export class TasksComponent implements OnInit {
  createTasks = [];
  task: tasks = new tasks();


  constructor(private taskservice: TaskService) { }


  ngOnInit() {
    this.taskservice.getTasks()
    .subscribe( task =>
      this.createTasks = task);
  }

  addTask(value) {
    const newTask = {
      Task_ID: value.Task_ID,
      Priority: value.priority,
      Start_date: value.start_date,
      End_date: value.end_date,
      Parent_Task: value.Parent_Task
    };
    this.taskservice.addTasks(newTask)
    .subscribe(task => {
      this.createTasks.push(task);
    }, error => {
      console.log('AddTask failed' +error);
    });
  }
}
