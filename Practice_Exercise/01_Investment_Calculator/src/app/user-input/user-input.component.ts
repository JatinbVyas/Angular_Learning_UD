import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-user-input',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './user-input.component.html',
  styleUrl: './user-input.component.css',
})
export class UserInputComponent {
  @Output() onCalculateInvestment = new EventEmitter<{
    initialInvestment: number;
    annualInvestment: number;
    expectedReturn: number;
    duration: number;
  }>();
  initialInvestment: string = '0';
  annualInvestment: string = '0';
  expectedReturn: string = '5';
  duration: string = '10';

  onInvestmentSubmit() {
    this.onCalculateInvestment.emit({
      // Convert string inputs to numbers using the unary plus operator
      initialInvestment: +this.initialInvestment,
      annualInvestment: +this.annualInvestment,
      expectedReturn: +this.expectedReturn,
      duration: +this.duration,
    });
  }
}
