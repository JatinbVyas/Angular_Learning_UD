import { Component, computed, input, Input } from '@angular/core';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css',
})
export class UserComponent {
  
//  @Input({required: true}) avtar!: string;
 // @Input({required: true}) name!: string;

 /**
  * This is input signal feature of angular 16+
  * using this lower case input is used to define input signal.
  * .required means this is required property.
  * And when we use input signal at that time we need computed function to get computed values.
  * get method can't be used.
  * There will be no changes in app component.html file but , in  user.component.html changes are required.
  * At there we need to use this.avtar() and this.name() instead of this.avtar and this.name.
  */
 avtar = input.required<string>();
 name = input.required<string>();
 imagePath = computed(() => {
    return 'assets/users/' + this.avtar();
  });

  // get imagePath() {
  //   return 'assets/users/' + this.avtar;
  // }
  onUserClick() {    
  
  }
}
