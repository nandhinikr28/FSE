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

  constructor(private http: Http) { }

  // retrieving tasks
  getTasks() {
    return this.http.get('http://localhost:3000/api/tasks')
    .pipe(map(res => res.json()));
  }

  // add tasks
  addTasks(newTask) {
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.post('http://localhost:3000/api/tasks', newTask, { headers: headers });

  }

  //handle-data (medium) 02-12-2018
  private handleData(res: any){
    let body = res.json();
    console.log(body);
    return body || {};
  }

 //update tasks
 updateTasks(task:any){
   return this.http
          .put(this.apiUrl, task)
          .toPromise()
          .then(this.handleData)
 }

  // delete tasks
  deleteTask(id) {
    return this.http.delete('http://localhost:3000/api/tasks/' + id)
    .pipe(map(res => res.json()));
  }
}

