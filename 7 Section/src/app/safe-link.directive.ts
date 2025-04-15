import { Directive, ElementRef, inject, input } from '@angular/core';

@Directive({
  selector: 'a[appSafeLink]',
  standalone: true,
  host: {
    '(click)': 'onConfirmLeavePage($event)',
  },
})
export class SafeLinkDirective {
  queryParam = input('myApp', { alias: 'appSafeLink' });
  /**
   * Here we crated a directive that will be used to confirm the user before leaving the page.
   * This directive will be used in the learning resources component to confirm the user before leaving the page.
   * @Directive is a decorator that marks a class as an Angular directive.
   */
  constructor() {
    console.log('SafeLinkDirective initialized');
  }

  //We can have dependency injection in the constructor of the directive
  // Here we accessing host element reference using ElementRef
  // ElementRef is a class that wraps a native element and provides access to it.
  // It is used to access the DOM element that the directive is applied to.
  // Here in this case anchor tag is the host element
  private hostElementRef = inject<ElementRef<HTMLAnchorElement>>(ElementRef);

  onConfirmLeavePage(event: MouseEvent) {
    const confirmLeave = confirm('Are you sure you want to leave this page?');
    if (!confirmLeave) {
      event.preventDefault();
    }

    // Here we are adding a query parameter to the link address
    // This is just an example, you can add any query parameter you want

    // const linkAddress = (event.target as HTMLAnchorElement).href;
    // (event.target as HTMLAnchorElement).href =
    //   linkAddress + '?from=' + this.queryParam();

    const linkAddress = this.hostElementRef.nativeElement.href;
    this.hostElementRef.nativeElement.href =
      linkAddress + '?from=' + this.queryParam();
  }
}
