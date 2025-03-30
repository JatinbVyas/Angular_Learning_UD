import { Component, Input } from '@angular/core';
import { UserTasksComponent } from './userTasks/userTasks.component';
import { AddTaskComponent } from './add-task/add-task.component';
import { insertTaskObj } from './userTasks/userTasks.model';

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
  dummyTasks = [
    {
      id: 't1',
      userId: 'u1',
      title: 'Master Angular',
      summary:
        'Learn all the basic and advanced features of Angular & how to apply them.',
      dueDate: '2025-12-31',
    },
    {
      id: 't2',
      userId: 'u3',
      title: 'Build first prototype',
      summary: 'Build a first prototype of the online shop website',
      dueDate: '2024-05-31',
    },
    {
      id: 't3',
      userId: 'u3',
      title: 'Prepare issue template',
      summary:
        'Prepare and describe an issue template which will help with project management',
      dueDate: '2024-06-15',
    },
  ];

  get selectedUserTasks() {
    return this.dummyTasks.filter((task) => task.userId === this.userId);
  }

  completeClickRemoveTask(taskId: string) {
    console.log('Task completed:', taskId);
    this.dummyTasks = this.dummyTasks.filter((task) => task.id !== taskId);
  }

  onAddTaskClick() {
    console.log('Add Task Clicked');
    this.isAddtaskClicked = true;
  }

  cancelPopupCallce() {
    console.log('Cancel Popup Called');
    this.isAddtaskClicked = false;
  }

  saveTask(taskObj: insertTaskObj) {
    console.log('Save Task Called', taskObj);
    this.dummyTasks.push({
      id: 't' + (this.dummyTasks.length + 1),
      userId: this.userId,
      title: taskObj.title,
      summary: taskObj.summary,
      dueDate: taskObj.dueDate,
    });
    this.isAddtaskClicked = false;
  }
}
