import { Component, inject, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AuthService } from './auth.service';
import { LogDirective } from '../log.directive';

@Component({
  selector: 'app-auth',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './auth.component.html',
  styleUrl: './auth.component.css',
  //hostdirectives is a property that allows you to add directives to the host element of the component
  //hostdirectives is an array of directives that will be added to the host element of the component
  //Now this LogDirective will be added to the whole auth component
  //This means that the LogDirective will be applied to the whole auth component, wherever clicked on auth compoent console log statment will print element object details.
  hostDirectives: [LogDirective],
})
export class AuthComponent {
  email = signal('');
  password = signal('');
  private authService = inject(AuthService);

  onSubmit() {
    this.authService.authenticate(this.email(), this.password());
  }
}
