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
  styleUrl: './user.component.css',
})
export class UserComponent {
  /**
   * Below selectedUser is a property of the class UserComponent.
   * And we assign reandom user from the DUMMY_USERS array to it.
   * This selectedUser variable is used/accesible in the template/ user.component.html file to display the user details.
   */
  selectedUser = DUMMY_USERS[randomIndex];

  /**
   * This is a getter method that returns the path of the image based on the selected user's avatar.
   * The imagePath property is used in the user.component.html file to display the user's avatar image.
   * it is like get set in Asp.net
   */
  get imagePath() {
    return 'assets/users/' + this.selectedUser.avatar;
  }

  //This is a method that is called when the user clicks on the button in the template.
  // This is method that also can be accessible in html file
  onUserClick() {
    //So now when the user clicks on the button, we will select a random user from the DUMMY_USERS array and assign it to the selectedUser property.
    //This will update the selectedUser property and the template will automatically re-render to display the new user's details.
    //This is called state management in Angular. When the state of the component changes, Angular automatically re-renders the template to reflect the new state.
    const randomIndex = Math.floor(Math.random() * DUMMY_USERS.length);
    this.selectedUser = DUMMY_USERS[randomIndex];
  }
}
