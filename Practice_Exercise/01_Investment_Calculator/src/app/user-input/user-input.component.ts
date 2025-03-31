import { Component, EventEmitter, Output, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { InvestmentModel } from '../investmentModel.model';
import { single } from 'rxjs';

@Component({
  selector: 'app-user-input',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './user-input.component.html',
  styleUrl: './user-input.component.css',
})
export class UserInputComponent {
  @Output() onCalculateInvestment = new EventEmitter<InvestmentModel>();
  // initialInvestment: string = '0';
  // annualInvestment: string = '0';
  // expectedReturn: string = '5';
  // duration: string = '10';

  // Using signals for state management
  // This allows for more reactive programming and better performance in Angular applications.
  initialInvestment = signal('0');
  annualInvestment = signal('0');
  expectedReturn = signal('5');
  duration = signal('10');

  onInvestmentSubmit() {
    this.onCalculateInvestment.emit({
      // Convert string inputs to numbers using the unary plus operator
      initialInvestment: +this.initialInvestment(),
      annualInvestment: +this.annualInvestment(),
      expectedReturn: +this.expectedReturn(),
      duration: +this.duration(),
    });
  }
}
