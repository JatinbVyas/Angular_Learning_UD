import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';

import { HeaderComponent } from './header/header.component';
import { UserComponent } from './user/user.component';
import { TasksComponent } from './tasks/tasks.component';
import { BrowserModule } from '@angular/platform-browser';
import { UserTasksComponent } from './tasks/userTasks/userTasks.component';
import { AddTaskComponent } from './tasks/add-task/add-task.component';
import { SharedModule } from './shared.module';

@NgModule({
  //declarations are the components, directives, and pipes that belong to this module.
  declarations: [
    AppComponent,
    HeaderComponent,
    UserComponent,
    TasksComponent,
    UserTasksComponent,
    AddTaskComponent,
  ],
  //bootstrap contains the root component of the application.
  // The root component is the main component that is loaded when the application starts.
  bootstrap: [AppComponent],
  //in imports we can define standalone components, directives, and pipes that are used in this module.
  imports: [BrowserModule, FormsModule, SharedModule],
})
export class AppModule {}
