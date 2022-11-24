import { Injectable } from '@angular/core';
import { InMemoryDbService, RequestInfo } from 'angular-in-memory-web-api';
import { Observable } from 'rxjs';
import transacs from './../assets/data/transactions.json';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService {
  

  createDb(){
  //  console.log("transacs Json : "+transacs[0].id);
    return {transacs};
  }
    constructor() { }
}
