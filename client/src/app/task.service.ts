import { Injectable } from '@angular/core';
import {Http,Headers} from '@angular/http';
import {tasks} from './task';
import {map} from  'rxjs/operators';
import { Promise } from 'q';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  private apiUrl  = 'http://localhost:3000/api/tasks';
  options;

  constructor(private http: Http) { }

  // retrieving tasks
  getTasks() {
    return this.http.get('http://localhost:3000/api/tasks')
    .pipe(map(res => res.json()));
  }

  // retrieving single task
  getTaskById(id){
    return this.http.get('http://localhost:3000/api/tasks/'+id, this.options)
    .pipe(map(res => res.json()));
  }

  // add tasks
  addTasks(newTask) {
    console.log("addtask", newTask.Task_ID, newTask.Parent_Task,
  newTask.Priority, newTask.Start_date, newTask.End_date);
   /*const headers = new Headers();
    headers.append('Content-Type', 'application/json');*/
    return this.http.post('http://localhost:3000/api/tasks', newTask)
    //.pipe(map(res=>res.json()));

  }

  //handle-data (medium) 02-12-2018
  private handleData(res: any){
    let body = res.json();
    console.log(body);
    return body || {};
  }

  search(query){
    return this.http.get('http://localhost:3000/api/tasks/'+query+'%', this.options)
    .pipe(map(res => res.json()));

  }

 //update tasks
/* updateTasks(task){
   console.log("updating task"+task._id);
   return this.http
          .put(this.apiUrl, task)
          .toPromise()
          .then(this.handleData)
 }*/

 updateTasks(task){
   console.log("updating task"+task._id);
   return this.http.put('http://localhost:3000/api/tasks/'+task._id, task, this.options)
   .pipe(map(res => res.json()));
 }



  // delete tasks
  deleteTask(id) {
    return this.http.delete('http://localhost:3000/api/tasks/' + id)
    .pipe(map(res => res.json()));
  }
}

