import { Component, EventEmitter, input, Input, Output } from '@angular/core';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css',
})
export class UserComponent {
  @Input({ required: true }) id!: string;
  @Input({ required: true }) avtar!: string;
  @Input({ required: true }) name!: string;
  //Here we used Output decorator to create a custom event emitter
  // that can be used to emit events from the child component to the parent component.
  // The EventEmitter class is a built-in Angular class that allows you to create custom events.
  // The select event is emitted when the user clicks on the user component.
  // Here we define select event , this can be used as event binding in the parent component.
  // The select event is emitted when the user clicks on the user component.
  @Output() select = new EventEmitter<string>();

  get imagePath() {
    return 'assets/users/' + this.avtar;
  }
  //This method is called when the user clicks on the user component.
  // It emits the select event with the id of the user as the payload.
  onUserClick() {
    console.log('User clicked:', this.id);
    this.select.emit(this.id);
  }
}
