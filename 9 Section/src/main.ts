import { bootstrapApplication } from '@angular/platform-browser';

import { AppComponent } from './app/app.component';
import { TaskService } from './app/tasks/tasks.service';

bootstrapApplication(AppComponent, {
  //providers is an array of providers that are available to the entire application
  //This way TaskService is injected into the entire applications
  providers: [TaskService],
}).catch((err) => console.error(err));
