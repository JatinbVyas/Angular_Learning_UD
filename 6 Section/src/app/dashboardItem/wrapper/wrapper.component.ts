import { Component, input, Input } from '@angular/core';

@Component({
  selector: 'app-wrapper',
  standalone: true,
  imports: [],
  templateUrl: './wrapper.component.html',
  styleUrl: './wrapper.component.css',
})
export class WrapperComponent {
  // @Input({ required: true }) title!: string;
  // @Input({ required: true }) image!: { src: string; alt: string };
  title = input<string>();
  image = input<{ src: string; alt: string }>();
}
