import {
  Directive,
  effect,
  inject,
  Input,
  TemplateRef,
  ViewContainerRef,
} from '@angular/core';
import { Permission } from './auth.model';
import { AuthService } from './auth.service';

@Directive({
  selector: '[appAuthDirective]',
  standalone: true,
})
export class AuthDirectiveDirective {
  @Input({ required: true }) userType!: Permission;
  private authService = inject(AuthService);

  // This TemplateRef is the template that will be rendered when the condition is true
  // This ViewContainerRef is the container where the template will be rendered
  // The ViewContainerRef is a container that can hold one or more views
  // The TemplateRef is a reference to the template that will be rendered
  private templateRef = inject(TemplateRef);
  private viewContainer = inject(ViewContainerRef);

  constructor() {
    effect(() => {
      if (this.authService.activePermission() === this.userType) {
        //createEmbeddedView creates a view from the template and adds it to the container
        // The view is created with the context of the template, which is the data that will be used in the template
        this.viewContainer.createEmbeddedView(this.templateRef);
      } else {
        this.viewContainer.clear();
      }
    });
  }
}
