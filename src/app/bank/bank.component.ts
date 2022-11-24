import { TransactionsService } from './../transactions.service';
import { Component } from '@angular/core';
import { Transaction } from '../Transaction';

@Component({
  selector: 'app-bank',
  templateUrl: './bank.component.html',
  styleUrls: ['./bank.component.css']
})
export class BankComponent {
  
  transactions: Transaction[] = [];
  
  constructor(private transactionsService: TransactionsService) { }
  
  ngOnInit() {
    this.getTransactions();
  }
  
  getTransactions(): void {
    this.transactionsService.getTransactions().subscribe(transactions => this.transactions = transactions);
    //this.displayTransactions();
  }
  
  displayTransactions(): void {
    console.log("TransactionsFromBank"+typeof this.transactions[0].id);
  }
  
  sortTransactions(param:string): void {
    switch(param){
      case "id":
      this.transactions.sort((a,b) => (a.id > b.id) ? 1 : ((b.id > a.id) ? -1 : 0));
      break;
      case "date":
      this.transactions.sort((a,b) => (a.date > b.date) ? 1 : ((b.date > a.date) ? -1 : 0));
      break;
      case "amount":
      this.transactions.sort((a,b) => (a.amount > b.amount) ? 1 : ((b.amount > a.amount) ? -1 : 0));
      break;
      case "balance":
      this.transactions.sort((a,b) => (a.balance > b.balance) ? 1 : ((b.balance > a.balance) ? -1 : 0));
      break;
      case "label":
      this.transactions.sort((a,b) => (a.label > b.label) ? 1 : ((b.label > a.label) ? -1 : 0));
      break;
    }
  }
  
  
  
}
