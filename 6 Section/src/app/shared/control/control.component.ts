import {
  Component,
  contentChild,
  ContentChild,
  ElementRef,
  HostBinding,
  HostListener,
  inject,
  input,
  ViewEncapsulation,
} from '@angular/core';

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
    //'(click)': 'onClickHostControl()',
  },
})
export class ControlComponent {
  //@HostBinding('class') className = 'control'; // This will apply the class 'control' to the host element of the component
  private hostElement = inject(ElementRef); // This will inject the host element of the component

  // @ContentChild('inputvar') private controlElemet?: ElementRef<
  //   HTMLInputElement | HTMLTextAreaElement
  // >;
  // This will get the input element from the template
  // @ContentChild is a decorator that allows you to access a child component or directive in the template.

  private controlElemet =
    contentChild<ElementRef<HTMLInputElement | HTMLTextAreaElement>>(
      'inputvar'
    );

  @HostListener('click') onClickHostControl() {
    console.log('Host control clicked!');
    console.log(this.hostElement);
    console.log(this.hostElement.nativeElement); // This will log the host element of the component

    console.log(this.controlElemet()); // This will log the input element from the template
  } // This will listen to the click event on the host element of the component

  label = input.required<string>();
}
