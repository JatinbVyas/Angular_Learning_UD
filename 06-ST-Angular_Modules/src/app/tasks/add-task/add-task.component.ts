import { Component, EventEmitter, inject, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TasksService } from '../tasks.service';

@Component({
  selector: 'app-add-task',
  standalone: false,
  templateUrl: './add-task.component.html',
  styleUrl: './add-task.component.css',
})
export class AddTaskComponent {
  @Input({ required: true }) userId!: string;
  @Output() cancelPopup = new EventEmitter<void>();
  taskTitle = '';
  taskSummary = '';
  taskDueDate = '';

  // The TasksService instance is injected into the constructor.
  // inject() is a function that allows you to inject dependencies in Angular.
  // It is used to create an instance of the TasksService class, which is responsible for managing tasks.
  // similar as constructor injection, but it is used in a more functional way.
  // This is useful in standalone components where you might not have a constructor.
  private _taskService = inject(TasksService);

  onCancelClick() {
    console.log('Cancel Clicked');
    this.cancelPopup.emit();
  }

  onSubmit() {
    this._taskService.addTask(
      {
        title: this.taskTitle,
        summary: this.taskSummary,
        dueDate: this.taskDueDate,
      },
      this.userId
    );
    this.cancelPopup.emit();
    // this.insertTask.emit({
    //   title: this.taskTitle,
    //   summary: this.taskSummary,
    //   dueDate: this.taskDueDate,
    // });
  }
}
