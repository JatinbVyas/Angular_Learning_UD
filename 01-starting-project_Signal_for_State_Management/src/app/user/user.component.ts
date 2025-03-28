import { Component, computed, signal } from '@angular/core';

import { DUMMY_USERS } from '../dummy-users';

const randomIndex = Math.floor(Math.random() * DUMMY_USERS.length);

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css',
})
export class UserComponent {
  /**
   *Here we learn about the signal API in Angular.
   * The signal API is a new way to manage state in Angular applications.
   * It allows you to create reactive properties that automatically update the template when their values change.
   * The signal API is similar to the useState and useEffect hooks in React.
   * It is a new way to manage state in Angular applications.
   * We can give initial value to the signal API by providing a value to the signal function in brackets.
   */
  selectedUser = signal(DUMMY_USERS[randomIndex]);

  // We can use the computed method to create a derived signal.
  // The computed method is similar to the useMemo hook in React.
  // It allows you to create a signal that depends on other signals.
  // The computed method takes a function as an argument and returns a signal that updates automatically when the values of the signals it depends on change.
   imagePath = computed(() => 'assets/users/' + this.selectedUser().avatar);
   
  onUserClick() {    
    const randomIndex = Math.floor(Math.random() * DUMMY_USERS.length);
    // We can use the set method to update the value of the signal.
    // The set method is similar to the setState method in React.
    this.selectedUser.set(DUMMY_USERS[randomIndex]);
  }
}
