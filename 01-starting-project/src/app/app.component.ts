import { Component } from '@angular/core';
import { HeaderComponent } from './header.component';

@Component({
  selector: 'jack-root',
  standalone: true,
  imports: [HeaderComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {}
