import { Component } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { UserComponent } from './user/user.component';
import { DUMMY_USERS } from './dummy-users';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HeaderComponent, UserComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  users = DUMMY_USERS;

  //This method is called from usre component ts file , once user clicks on the user component.
  // It receives the id of the user as the payload.
  onSelectUser(id: string) {
    console.log('Selected user ID:', id);
  }
}
