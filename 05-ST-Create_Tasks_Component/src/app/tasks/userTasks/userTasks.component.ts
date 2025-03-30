import { Component, EventEmitter, Input, Output } from '@angular/core';
import { UserTasksObj } from './userTasks.model';
import { CardComponent } from '../../shared/card/card.component';
import { DatePipe } from '@angular/common';

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
  onCompleteClick() {
    this.complete.emit(this.userTasks.id);
  }
}
