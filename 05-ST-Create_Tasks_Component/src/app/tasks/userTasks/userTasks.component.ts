import { Component, EventEmitter, inject, Input, Output } from '@angular/core';
import { UserTasksObj } from './userTasks.model';
import { CardComponent } from '../../shared/card/card.component';
import { DatePipe } from '@angular/common';
import { TasksService } from '../tasks.service';

@Component({
  selector: 'app-user-task',
  standalone: true,
  imports: [CardComponent, DatePipe],
  templateUrl: './userTasks.component.html',
  styleUrl: './userTasks.component.css',
})
export class UserTasksComponent {
  @Input({ required: true }) userTasks!: UserTasksObj;
  @Output() complete = new EventEmitter<string>();

  private _taskService = inject(TasksService);
  onCompleteClick() {
    //Now instead of emitting the event, we are directly removing the task from the service.
    //Now removing other related changes to event, just comment event emission.
    this._taskService.removeTask(this.userTasks.id);
    //this.complete.emit(this.userTasks.id);
  }
}
