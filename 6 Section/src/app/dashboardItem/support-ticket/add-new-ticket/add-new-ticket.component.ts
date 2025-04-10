import { Component } from '@angular/core';
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
  onSubmit(
    titleElement: HTMLInputElement,
    descriptionElement: HTMLTextAreaElement
  ) {
    const title = titleElement.value;
    const description = descriptionElement.value;
    console.log(title, description);
  }
}
