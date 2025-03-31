import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { InvestmentModel } from '../investmentModel.model';

@Component({
  selector: 'app-user-input',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './user-input.component.html',
  styleUrl: './user-input.component.css',
})
export class UserInputComponent {
  @Output() onCalculateInvestment = new EventEmitter<InvestmentModel>();
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
