import { InjectionToken, Provider } from '@angular/core';

export type TaskStatus = 'OPEN' | 'IN_PROGRESS' | 'DONE';

type TaskStatusOptionType = {
  value: 'open' | 'in-progress' | 'done';
  taskStatus: TaskStatus;
  text: string;
}[];

export const TASK_STAUTS_OPTIONS = new InjectionToken<TaskStatusOptionType>(
  'TASK_STAUTS_OPTIONS'
);

export const tasksStatusOpetion: TaskStatusOptionType = [
  {
    value: 'open',
    taskStatus: 'OPEN',
    text: 'Open',
  },
  {
    value: 'in-progress',
    taskStatus: 'IN_PROGRESS',
    text: 'In-Progress',
  },
  {
    value: 'done',
    taskStatus: 'DONE',
    text: 'Completed',
  },
];

export const tasksStatusOptionsProvider: Provider = {
  provide: TASK_STAUTS_OPTIONS,
  useValue: tasksStatusOpetion,
};

export interface Task {
  id: string;
  title: string;
  description: string;
  status: TaskStatus;
}
