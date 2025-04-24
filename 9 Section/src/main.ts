import { bootstrapApplication } from '@angular/platform-browser';

import { AppComponent } from './app/app.component';
import { InjectionToken } from '@angular/core';
import { TaskService } from './app/tasks/tasks.service';

export const tasksServiceToken = new InjectionToken<TaskService>(
  'task-service-token'
);
bootstrapApplication(AppComponent, {
  providers: [{ provide: tasksServiceToken, useClass: TaskService }],
}).catch((err) => console.error(err));
