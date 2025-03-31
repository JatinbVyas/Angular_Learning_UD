import { NgModule } from '@angular/core';
import { TasksComponent } from '../tasks.component';
import { UserTasksComponent } from './userTasks.component';
import { AddTaskComponent } from '../add-task/add-task.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '../../shared.module';

@NgModule({
  declarations: [TasksComponent, UserTasksComponent, AddTaskComponent],
  exports: [TasksComponent],
  imports: [CommonModule, FormsModule, SharedModule],
})
export class TasksModule {}
