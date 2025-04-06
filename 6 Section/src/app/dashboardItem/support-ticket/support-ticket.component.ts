import { Component } from '@angular/core';
import { AddNewTicketComponent } from './add-new-ticket/add-new-ticket.component';

@Component({
  selector: 'app-support-ticket',
  standalone: true,
  imports: [AddNewTicketComponent],
  templateUrl: './support-ticket.component.html',
  styleUrl: './support-ticket.component.css',
})
export class SupportTicketComponent {}
