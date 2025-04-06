import { Component } from '@angular/core';
import { ButtonComponent } from '../../../shared/button/button.component';

@Component({
  selector: 'app-add-new-ticket',
  standalone: true,
  imports: [ButtonComponent],
  templateUrl: './add-new-ticket.component.html',
  styleUrl: './add-new-ticket.component.css',
})
export class AddNewTicketComponent {}
