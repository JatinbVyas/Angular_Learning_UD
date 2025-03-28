import { Component } from '@angular/core';

import { DUMMY_USERS } from '../dummy-users';

const randomIndex = Math.floor(Math.random() * DUMMY_USERS.length);

/**
 * This @Coomponent decorator is used to define the metadata for the component.
 */
@Component({
  selector: 'app-user',
  standalone: true,
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
  /**
   * Below selectedUser is a property of the class UserComponent.
   * And we assign reandom user from the DUMMY_USERS array to it.
   * This selectedUser variable is used/accesible in the template/ user.component.html file to display the user details.
   */
  selectedUser = DUMMY_USERS[randomIndex];
}
