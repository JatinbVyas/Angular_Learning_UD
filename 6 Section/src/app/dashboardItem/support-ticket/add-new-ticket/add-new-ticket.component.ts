import { Component, ElementRef, viewChild, ViewChild } from '@angular/core';
import { ButtonComponent } from '../../../shared/button/button.component';
import { ControlComponent } from '../../../shared/control/control.component';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-add-new-ticket',
  standalone: true,
  imports: [ButtonComponent, ControlComponent, FormsModule],
  templateUrl: './add-new-ticket.component.html',
  styleUrl: './add-new-ticket.component.css',
})
export class AddNewTicketComponent {
  //@ViewChile is a decorator that allows you to access a child component or directive in the template.
  // It is used to get a reference to the form element in the template.
  // The 'ticketForm' is the template reference variable defined in the template.
  // The 'HTMLFormElement' is the type of the element you want to access.
  // The 'ElementRef' is a wrapper around the native element that allows you to access its properties and methods.

  //@ViewChild('ticketForm') formControl?: ElementRef<HTMLFormElement>;

  //viewChild is a function that allows you to access a child component or directive in the template.
  // It is used to get a reference to the form element in the template.
  // The 'ticketForm' is the template reference variable defined in the template.
  // The 'HTMLFormElement' is the type of the element you want to access.
  // viewChild.required is used to make the formControl property required.
  private formControl = viewChild<ElementRef<HTMLFormElement>>('ticketForm');

  onSubmit(
    titleElement: HTMLInputElement,
    descriptionElement: HTMLTextAreaElement
  ) {
    const title = titleElement.value;
    const description = descriptionElement.value;
    console.log(title, description);
    this.formControl()?.nativeElement.reset(); // Reset the form after submission
  }
}
