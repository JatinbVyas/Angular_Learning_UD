import { bootstrapApplication } from '@angular/platform-browser';

import { AppComponent } from './app/app.component';
import { HeaderComponent } from './app/header.component';

bootstrapApplication(AppComponent).catch((err) => console.error(err));
//Registering the HeaderComponent to render in dom.
bootstrapApplication(HeaderComponent).catch((err) => console.error(err));

