import { Injectable } from '@angular/core';
import { HttpClient,  HttpHeaders } from '@angular/common/http';
import { Observable, of, catchError, map, tap } from 'rxjs';
import { Transaction } from './Transaction';

@Injectable({
  providedIn: 'root'
})
export class TransactionsService {
   
  constructor(private http: HttpClient) { }
  
  private transactionsUrl = "api/transacs";
  private transaction?: Transaction;
  
  getTransactions(): Observable<Transaction[]> {
    console.log("getTransactions");
    //console.log(this.http.get<Transaction[]>(this.transactionsUrl[0][0]));

    return this.http.get<Transaction[]>(this.transactionsUrl)
    .pipe(catchError(this.handleError<Transaction[]>('getTransactions', [])));
  }

  setTransaction(transaction: Transaction): void {
    console.log("setTransaction");
    console.log(transaction);
    this.transaction = transaction;
  }

  getTransaction(): Transaction | undefined {
    console.log("getTransaction");
    console.log(this.transaction);
    return this.transaction;
  }
    
  

  private handleError<T>(operation = 'operation', result?: T) {
    console.log("Error");
    console.log("operation "+ operation);
    console.log("result "+ result);
    return (error: any): Observable<T> => {
  
      // TODO: send the error to remote logging infrastructure
      // // log to console instead
  
      // TODO: better job of transforming error for user consumption
      console.log(`${operation} failed: ${error.message}`);
  console.error(error);
      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
}