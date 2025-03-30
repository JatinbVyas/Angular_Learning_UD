import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { insertTaskObj } from '../userTasks/userTasks.model';

@Component({
  selector: 'app-add-task',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './add-task.component.html',
  styleUrl: './add-task.component.css',
})
export class AddTaskComponent {
  @Output() cancelPopup = new EventEmitter<void>();
  @Output() insertTask = new EventEmitter<insertTaskObj>();
  taskTitle = '';
  taskSummary = '';
  taskDueDate = '';

  onCancelClick() {
    console.log('Cancel Clicked');
    this.cancelPopup.emit();
  }

  onSubmit() {
    this.insertTask.emit({
      title: this.taskTitle,
      summary: this.taskSummary,
      dueDate: this.taskDueDate,
    });
  }
}
