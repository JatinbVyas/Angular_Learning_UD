import { CurrencyPipe, NgFor, NgIf } from '@angular/common';
import { Component, inject } from '@angular/core';
import { InvestmentService } from '../investment.service';

@Component({
  selector: 'app-investment-results',
  standalone: true,
  imports: [NgIf, NgFor, CurrencyPipe],
  templateUrl: './investment-results.component.html',
  styleUrl: './investment-results.component.css',
})
export class InvestmentResultsComponent {
  //constructor(private _investmentService: InvestmentService) {}
  private _investmentService = inject(InvestmentService);
  // get investmentData() {
  //   return this._investmentService.resultData;
  // }

  investmentData = this._investmentService.resultData.asReadonly();
}
