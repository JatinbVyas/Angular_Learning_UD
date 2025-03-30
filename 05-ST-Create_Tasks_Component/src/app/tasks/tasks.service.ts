import { Injectable } from '@angular/core';
import { insertTaskObj } from './userTasks/userTasks.model';

/**
 * This service is responsible for managing tasks.
 * It provides methods to get user tasks, add a new task, and remove a task.
 * Injectable in the root module, making it available throughout the application.
 *
 */
@Injectable({ providedIn: 'root' })
export class TasksService {
  private dummyTasks = [
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

  // The constructor initializes the dummyTasks array with data from localStorage if available.
  // If no data is found in localStorage, it uses the default dummyTasks array.
  constructor() {
    const dummyTasks = localStorage.getItem('dummyTasks');
    if (dummyTasks) {
      this.dummyTasks = JSON.parse(dummyTasks);
    }
  }

  getUserTasks(userId: string) {
    return this.dummyTasks.filter((task) => task.userId === userId);
  }

  addTask(taskObj: insertTaskObj, userId: string) {
    this.dummyTasks.unshift({
      id: 't' + (this.dummyTasks.length + 1),
      userId: userId,
      title: taskObj.title,
      summary: taskObj.summary,
      dueDate: taskObj.dueDate,
    });
    this.saveTasks();
  }

  removeTask(taskId: string) {
    this.dummyTasks = this.dummyTasks.filter((task) => task.id !== taskId);
    this.saveTasks();
  }

  private saveTasks() {
    localStorage.setItem('dummyTasks', JSON.stringify(this.dummyTasks));
  }
}
