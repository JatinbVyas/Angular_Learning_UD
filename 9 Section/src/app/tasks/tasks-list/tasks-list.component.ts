import { Component, computed, inject, signal } from '@angular/core';

import { TaskItemComponent } from './task-item/task-item.component';
import { tasksServiceToken } from '../../../main';
import { TASK_STAUTS_OPTIONS, tasksStatusOptionsProvider } from '../task.model';

@Component({
  selector: 'app-tasks-list',
  standalone: true,
  templateUrl: './tasks-list.component.html',
  styleUrl: './tasks-list.component.css',
  imports: [TaskItemComponent],
  providers: [tasksStatusOptionsProvider],
})
export class TasksListComponent {
  private tasksService = inject(tasksServiceToken);
  selectedFilter = signal<string>('all');
  taskStatusOptions = inject(TASK_STAUTS_OPTIONS);
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
