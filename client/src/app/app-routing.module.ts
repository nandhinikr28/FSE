import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TasksComponent } from 'src/app/tasks/tasks.component';
import { ViewTaskComponent } from './view-task/view-task.component';
import { SingleTaskComponent } from './single-task/single-task.component';

const appRouter: Routes = [
  { path: 'view-task', component: ViewTaskComponent },
  { path: 'add-task', component: TasksComponent },
  {path: 'update-task/:id', component: SingleTaskComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(appRouter)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
