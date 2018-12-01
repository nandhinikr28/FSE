import { Component, OnInit } from '@angular/core';
import {TaskService} from '../task.service';
import {tasks} from '../task';
import{Http, Headers} from '@angular/http'
import { HttpClient } from 'selenium-webdriver/http';
import { Router } from '@angular/router/src/router';
import { ActivatedRoute } from '@angular/router/src/router_state';


@Component({
  selector: 'app-single-task',
  templateUrl: './single-task.component.html',
  styleUrls: ['./single-task.component.css'],
  providers: [TaskService]
})
export class SingleTaskComponent implements OnInit {
  task = {};

  constructor(private taskservice: TaskService, private http: HttpClient,
  private router: Router, private route: ActivatedRoute) { }

  
  ngOnInit() {
    this.getTask(this.route.snapshot.params['id']);

  }

  getTask(id){
    this.http.get('/tasks/'+id).subscribe(data => {
      this.task = data;
    });
  }

  updateTask(id,data){
    this.http.put('/tasks/'+id,data)
    .subscribe(res =>{
      let id = res['_id'];
      this.router.navigate(['/tasks',id]);
    }, (err)=>{
      console.log(err);
    });
  }
}
