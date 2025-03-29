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
   * 
   * Here we seen the use of required property in @Input decorator.
   * It is used to make the input property required. If the property is not passed from parent component, it will gives error.
   * In this case avtar and name properties are required to be passed from app component.
   */
  @Input({required: true}) avtar!: string;
  @Input({required: true}) name!: string;

  get imagePath() {
    return 'assets/users/' + this.avtar;
  }
  onUserClick() {    
  
  }
}
