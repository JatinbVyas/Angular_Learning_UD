import { Component, Input } from '@angular/core';
import { UserTasksComponent } from './userTasks/userTasks.component';
import { AddTaskComponent } from './add-task/add-task.component';
import { insertTaskObj } from './userTasks/userTasks.model';
import { TasksService } from './tasks.service';

@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [UserTasksComponent, AddTaskComponent],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css',
})
export class TasksComponent {
  @Input({ required: true }) userId!: string;
  @Input() name?: string;
  isAddtaskClicked = false;

  private _tasksService: TasksService;

  /**
   * 
   * @param tasksService - The TasksService instance is injected into the constructor.
   * * This service is responsible for managing tasks, including adding, removing, and retrieving tasks.
   * * The constructor initializes the private _tasksService property with the injected service instance.
    dependency injection is a design pattern used in Angular to manage dependencies between components and services.
   * * By injecting the TasksService into the TasksComponent, we can access its methods and properties to manage tasks. 
  */
  constructor(tasksService: TasksService) {
    this._tasksService = tasksService;
  }

  get selectedUserTasks() {
    return this._tasksService.getUserTasks(this.userId);
  }

  completeClickRemoveTask(taskId: string) {
    console.log('Task completed:', taskId);
    this._tasksService.removeTask(taskId);
  }

  onAddTaskClick() {
    console.log('Add Task Clicked');
    this.isAddtaskClicked = true;
  }

  cancelPopupCallce() {
    console.log('Cancel Popup Called');
    this.isAddtaskClicked = false;
  }
}
