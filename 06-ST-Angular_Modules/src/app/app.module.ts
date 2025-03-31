import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';

import { HeaderComponent } from './header/header.component';
import { UserComponent } from './user/user.component';
import { BrowserModule } from '@angular/platform-browser';
import { SharedModule } from './shared.module';
import { TasksModule } from './tasks/userTasks/tasks.module';

@NgModule({
  //declarations are the components, directives, and pipes that belong to this module.
  declarations: [AppComponent, HeaderComponent, UserComponent],
  //bootstrap contains the root component of the application.
  // The root component is the main component that is loaded when the application starts.
  bootstrap: [AppComponent],
  //in imports we can define standalone components, directives, and pipes that are used in this module.
  imports: [BrowserModule, SharedModule, TasksModule],
})
export class AppModule {}
