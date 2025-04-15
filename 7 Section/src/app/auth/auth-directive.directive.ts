import { Directive, effect, inject, Input } from '@angular/core';
import { Permission } from './auth.model';
import { AuthService } from './auth.service';

@Directive({
  selector: '[appAuthDirective]',
  standalone: true,
})
export class AuthDirectiveDirective {
  @Input({ required: true }) userType!: Permission;

  private authService = inject(AuthService);
  constructor() {
    effect(() => {
      if (this.authService.activePermission() !== this.userType) {
        console.log('Show element');
      } else {
        console.log('Hide element');
      }
    });
  }
}
