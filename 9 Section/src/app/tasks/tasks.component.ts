import { Component } from '@angular/core';

import { NewTaskComponent } from './new-task/new-task.component';
import { TasksListComponent } from './tasks-list/tasks-list.component';
@Component({
  selector: 'app-tasks',
  standalone: true,
  templateUrl: './tasks.component.html',
  imports: [NewTaskComponent, TasksListComponent],
  //providers: [TaskService], // Providing the TaskService here makes it available to all child components
  //This is element injector , Now Taskservice is available to all child components
  //If we provide the TaskService in the app.module.ts, it will be available to all components in the app
})
export class TasksComponent {}
