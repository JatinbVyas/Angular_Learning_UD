import { Component } from '@angular/core';

@Component({
  selector: 'app-header', // This is the selector for the header component. It can be used in HTML as <app-header></app-header>
  // The selector is used to identify the component in the HTML template.
  standalone: true, // This component is marked as standalone true, it means this will not treat as module type component. meaning it can be used without being declared in a module.
  // Standalone components are a new feature in Angular that allows for more flexibility and modularity.
  // Standalone set false means this component will be treated as module type component.
  // Standalose set true means this component will be treated as standalone type component.
  templateUrl: './header.component.html',// The HTML template for the header component. This file contains the structure and layout of the header.
  // The templateUrl is used to link the HTML file to the component.
})
export class HeaderComponent {
  // Add any properties or methods for the header component here
}