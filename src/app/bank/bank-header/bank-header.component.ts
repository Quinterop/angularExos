import { Component } from '@angular/core';

@Component({
  selector: 'app-bank-header',
  templateUrl: './bank-header.component.html',
  styleUrls: ['./bank-header.component.css']
})
export class BankHeaderComponent {
//time and date variable that updates every second
  datetime:string = new Date().toLocaleString();
  //todo update the date and time every second
  
  constructor() { //copilot
    setInterval(() => {
      this.datetime = new Date().toLocaleString();
    }, 1000);
  }
}
