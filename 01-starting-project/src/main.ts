import { bootstrapApplication } from '@angular/platform-browser';

import { AppComponent } from './app/app.component';

bootstrapApplication(AppComponent).catch((err) => console.error(err));
//Removed registered HeaderComponent because as per recomemendation of angular team, we should not register the other component in main.ts file other than AppComponent. 
// Because it is not a good practice to register the other component in main.ts file individually.
//AppComponent is the root component of the application. It is the main component that is bootstrapped when the application starts.'
//And other components should be registered in the AppComponent only.

