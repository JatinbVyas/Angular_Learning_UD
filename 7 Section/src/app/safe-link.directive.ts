import { Directive } from '@angular/core';

@Directive({
  selector: 'a[appSafeLink]',
  standalone: true,
  host: {
    '(click)': 'onConfirmLeavePage($event)',
  },
})
export class SafeLinkDirective {
  /**
   * Here we crated a directive that will be used to confirm the user before leaving the page.
   * This directive will be used in the learning resources component to confirm the user before leaving the page.
   * @Directive is a decorator that marks a class as an Angular directive.
   */
  constructor() {
    console.log('SafeLinkDirective initialized');
  }

  onConfirmLeavePage(event: MouseEvent) {
    const confirmLeave = confirm('Are you sure you want to leave this page?');
    if (!confirmLeave) {
      event.preventDefault();
    }
  }
}
