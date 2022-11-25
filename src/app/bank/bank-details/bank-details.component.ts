import { Component, Input} from '@angular/core';
import { Transaction } from 'src/app/Transaction';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { BankHeaderComponent } from '../bank-header/bank-header.component';
import { TransactionsService } from 'src/app/transactions.service';


@Component({
  selector: 'app-bank-details',
  templateUrl: './bank-details.component.html',
  styleUrls: ['./bank-details.component.css']
})
export class BankDetailsComponent {
  transaction?: Transaction;;
  constructor(private route: ActivatedRoute, private transactionsService: TransactionsService) { }
  
  ngOnInit() {
    this.getTransaction();
  }
  
  getTransaction(): void {
    this.transaction = this.transactionsService.getTransaction();
    
  }
}
