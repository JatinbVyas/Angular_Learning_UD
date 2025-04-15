import { Component, Input, output, signal } from '@angular/core';
import { Ticket } from '../ticket.model';

@Component({
  selector: 'app-show-ticket',
  standalone: true,
  imports: [],
  templateUrl: './show-ticket.component.html',
  styleUrl: './show-ticket.component.css',
})
export class ShowTicketComponent {
  @Input({ required: true }) ticketData!: Ticket; // Input property to receive ticket data from the parent component

  closeTicket = output();

  detailsVisible = signal(false); // Signal to track the visibility of ticket details
  ontoggleDetails() {
    this.detailsVisible.update((prev) => !prev); // Toggle the visibility of ticket details
    //update is a method that allows you to update the value of a signal. It takes a function as an argument, which receives the previous value of the signal and returns the new value.
    // In this case, it toggles the value of detailsVisible between true and false.
  }

  onMarkAsCompleted() {
    this.closeTicket.emit(); // Emit the closeTicket event to notify the parent component that the ticket has been marked as completed
  }
}
