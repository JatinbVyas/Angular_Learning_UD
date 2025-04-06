import { Component } from '@angular/core';

@Component({
  //The selector can be used as an attiribute. It can be used as a tag, but it is not recommended to use it as a tag. It is better to use it as an attribute.
  // Once this appButton attribute applied to the button tag, it will be replaced with the button component html content.
  // By specifying the selector as 'button[appButton], a[appButton]', we can use this component as a button or an anchor tag.
  selector: 'button[appButton], a[appButton]',
  standalone: true,
  imports: [],
  templateUrl: './button.component.html',
  styleUrl: './button.component.css',
})
export class ButtonComponent {}
