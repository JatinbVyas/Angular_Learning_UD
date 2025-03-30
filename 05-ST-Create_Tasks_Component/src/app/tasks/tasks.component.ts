import { Component, Input } from '@angular/core';
import { AddTaskComponent } from './userTasks/userTasks.component';

@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [AddTaskComponent],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css',
})
export class TasksComponent {
  @Input() name?: string;
}
