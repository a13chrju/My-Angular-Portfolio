import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { HttpClient, HttpErrorResponse, HttpParams } from '@angular/common/http';
import { catchError, tap, map } from 'rxjs/operators';
import { Iblogg } from './blogg';

@Injectable({
  providedIn: 'root'
})
export class BlogfetcherService {
  private tempUrl = 'http://christopherj-002-site4.gtempurl.com/api/values/Get';
  private testUrl = 'http://localhost:7729/api/values/SendMessage';// just my localhost connection
  private SendMessageWebAPIurl = 'http://christopherj-002-site4.gtempurl.com/api/values/SendMessage';

  constructor(private http: HttpClient) { }

  sendMessage(formvalue): Observable<any[]> {
   // const url = "email=fd&message=fsfsa&title=fdsfsdfs";
    //let param1 = new HttpParams().set("message", formvalue.value.message);
   // let param2 = new HttpParams().set("title", formvalue.value.title);
    //let param3 = new HttpParams().set("email", formvalue.value.email);

    return this.http.get<any[]>(this.SendMessageWebAPIurl, { params: formvalue }).pipe(
      tap(data => console.log("fetched data: " + data)),
      catchError(this.handleError)

    );
  }

  getPosts(): Observable<any[]> {
    return this.http.get<any[]>(this.tempUrl).pipe(
      tap(data => console.log("fetched data: " + data)),
      catchError(this.handleError)

    );
  }

  getProducts(): Iblogg[] {
    return [
      {
        "id": 3,
        "date": "what is this",
        "text": "fsa",
        "rate": 3
      }
    ]
  }

  private handleError(err: HttpErrorResponse) {
    // in a real world app, we may send the server to some remote logging infrastructure
    // instead of just logging it to the console
    let errorMessage = '';
    if (err.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      errorMessage = `An error occurred: ${err.error.message}`;
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      errorMessage = `Server returned code: ${err.status}, error message is: ${err.message}`;
    }
    console.error(errorMessage);
    return throwError(errorMessage);
  }
}
