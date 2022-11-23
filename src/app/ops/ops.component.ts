import { Component } from '@angular/core';

@Component({
  selector: 'app-ops',
  templateUrl: './ops.component.html',
  styleUrls: ['./ops.component.css']
})
export class OpsComponent {
ops = [
  "+",
  "-",
  "*",
  "/"
];
num1:number = 0;
num2:number = 0;
op:string = this.ops[0];
result?: number;

calculate(){
  switch(this.op){
    case "+":
      this.result = this.num1 + this.num2;
      break;
    case "-":
      this.result = this.num1 - this.num2;
      break;
    case "*":
      this.result = this.num1 * this.num2;
      break;
    case "/":
      this.result = this.num1 / this.num2;
      break;
  }
}

}
