import { Component, inject, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { InvestmentService } from '../investment.service';

@Component({
  selector: 'app-user-input',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './user-input.component.html',
  styleUrl: './user-input.component.css',
})
export class UserInputComponent {
  // Using signals for state management
  // This allows for more reactive programming and better performance in Angular applications.
  initialInvestment = signal('0');
  annualInvestment = signal('0');
  expectedReturn = signal('5');
  duration = signal('10');

  private _investmentService = inject(InvestmentService);

  //constructor(private _investmentService: InvestmentService) {}

  onInvestmentSubmit() {
    this._investmentService.calculateInvestmentResults({
      initialInvestment: +this.initialInvestment(),
      annualInvestment: +this.annualInvestment(),
      expectedReturn: +this.expectedReturn(),
      duration: +this.duration(),
    });

    this.initialInvestment.set('0');
    this.annualInvestment.set('0');
    this.expectedReturn.set('5');
    this.duration.set('10');
  }
}
