import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css',
})
export class UserComponent {
  /**
   * Here we seen the use of @Input decorator.
   * It is used to pass data from parent component to child component.
   * In this case avtar and name properties are accessible to app component also
   */
  @Input() avtar!: string;
  @Input() name!: string;

  get imagePath() {
    return 'assets/users/' + this.avtar;
  }
  onUserClick() {    
  
  }
}
