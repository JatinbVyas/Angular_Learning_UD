import { Component, input, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-control',
  standalone: true,
  imports: [],
  templateUrl: './control.component.html',
  styleUrl: './control.component.css',
  //encapsulation: ViewEncapsulation.ShadowDom, // This will apply shadow DOM encapsulation
  //encapsulation: ViewEncapsulation.Emulated, // This will apply emulated encapsulation (default behavior)
  //encapsulation: ViewEncapsulation.None, // This will apply no encapsulation (global styles)
  encapsulation: ViewEncapsulation.None,
  //host is a property that allows you to bind properties and events to the host element of the component.
  // For example, you can set the class of the host element to 'control' using the following syntax:
  // It means whenevet app-control is used, it will have a class property with control as value.
  host: {
    class: 'control',
  },
})
export class ControlComponent {
  label = input.required<string>();
}
