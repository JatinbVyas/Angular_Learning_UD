import { Component, EventEmitter, Input, Output } from '@angular/core';

// type UserObj = {
//   id: string;
//   name: string;
//   avatar: string;
// };

interface UserObj {
  id: string;
  name: string;
  avatar: string;
}

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css',
})
export class UserComponent {
  @Input({ required: true }) user!: UserObj;

  @Output() select = new EventEmitter<string>();

  get imagePath() {
    return 'assets/users/' + this.user.avatar;
  }
  //This method is called when the user clicks on the user component.
  // It emits the select event with the id of the user as the payload.
  onUserClick() {
    console.log('User clicked:', this.user.id);
    this.select.emit(this.user.id);
  }
}
