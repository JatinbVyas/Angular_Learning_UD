import { Component, computed, inject, signal } from '@angular/core';

import { TaskItemComponent } from './task-item/task-item.component';
import { TaskService } from '../tasks.service';
import { tasksServiceToken } from '../../../main';

@Component({
  selector: 'app-tasks-list',
  standalone: true,
  templateUrl: './tasks-list.component.html',
  styleUrl: './tasks-list.component.css',
  imports: [TaskItemComponent],
})
export class TasksListComponent {
  private tasksService = inject(tasksServiceToken);
  selectedFilter = signal<string>('all');
  tasks = computed(() => {
    const filter = this.selectedFilter();
    const allTasks = this.tasksService.allTasks();

    switch (filter) {
      case 'open':
        return allTasks.filter((task) => task.status === 'OPEN');
      case 'in-progress':
        return allTasks.filter((task) => task.status === 'IN_PROGRESS');
      case 'done':
        return allTasks.filter((task) => task.status === 'DONE');
      default:
        return allTasks;
    }
  });

  onChangeTasksFilter(filter: string) {
    this.selectedFilter.set(filter);
  }
}
