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
  history?:string;
  results: any[] = [];
  displayResults(){
    //put all the localstorage in a string array
    
    var values: any[] = [],
    keys = Object.keys(localStorage),
    i = keys.length;
    
    while ( i-- ) {
      values.push( localStorage.getItem(keys[i]) );
    }
    //console.log(values);
    //add values to beginning of results array
    this.results = values.concat(this.results);
  }
  //display the results in a table
  
  
deleteval(val:string){
  //remove val from results array
  this.results = this.results.filter(function(value, index, arr){
    return value != val;
  });
  //this.displayResults();
}


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
  let date:string = new Date().toString().substring(16,24);
  let fullResult:string = date + " | " + this.num1 + " " + this.op + " " + this.num2 + " = " + this.result;
  localStorage.setItem("result", fullResult);
 // console.log(localStorage.getItem("result")+"stored");
  //console.log(localStorage[0]);
  this.displayResults();
}

}
