import { Component, EventEmitter, Input, Output } from '@angular/core';
import { UserTasksObj } from './userTasks.model';

@Component({
  selector: 'app-user-task',
  standalone: true,
  imports: [],
  templateUrl: './userTasks.component.html',
  styleUrl: './userTasks.component.css',
})
export class AddTaskComponent {
  @Input({ required: true }) userTasks!: UserTasksObj;
  @Output() complete = new EventEmitter<string>();
  onCompleteClick() {
    this.complete.emit(this.userTasks.id);
  }
}
