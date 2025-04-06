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
})
export class ControlComponent {
  label = input.required<string>();
}
