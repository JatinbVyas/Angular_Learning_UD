import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './app/app.module';

platformBrowserDynamic()
  .bootstrapModule(AppModule)
  .catch((err) => console.error(err));
// This file is the entry point for the Angular application. It bootstraps the AppModule, which is the root module of the application.
// The platformBrowserDynamic function is used to compile and launch the application in the browser.
// This approach is for module based components, where the AppModule is the main module that contains all the components and services of the application.
