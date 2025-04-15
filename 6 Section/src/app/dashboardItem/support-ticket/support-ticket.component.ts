import { Component } from '@angular/core';
import { AddNewTicketComponent } from './add-new-ticket/add-new-ticket.component';
import { Ticket } from './ticket.model';
import { ShowTicketComponent } from './show-ticket/show-ticket.component';

@Component({
  selector: 'app-support-ticket',
  standalone: true,
  imports: [AddNewTicketComponent, ShowTicketComponent],
  templateUrl: './support-ticket.component.html',
  styleUrl: './support-ticket.component.css',
})
export class SupportTicketComponent {
  tickets: Ticket[] = [];

  addTicketData(ticketData: { title: string; description: string }) {
    const newTicket: Ticket = {
      id: Math.random().toString(36).substring(2, 9), // Generate a random ID for the ticket
      title: ticketData.title,
      description: ticketData.description,
      status: 'open', // Set the initial status of the ticket to 'open'
    };

    this.tickets.push(newTicket); // Add the new ticket to the tickets array
  }

  onCloseTicket(ticketId: string) {
    this.tickets = this.tickets.map((ticket) => {
      if (ticket.id === ticketId) {
        return { ...ticket, status: 'closed' }; // Update the status of the ticket to 'closed'
      }
      return ticket; // Return the ticket unchanged if it doesn't match the ID
    });
  }
}
