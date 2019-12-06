import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, tap} from 'rxjs/operators';

import { IContact } from '../contact/contact';

@Injectable({
    providedIn: 'root'
})
export class ContactService {
    
    private contactUrl = 'api/contacts/contacts.json';

    constructor(private http: HttpClient){
        
    }

    getContacts(): Observable<IContact[]>{
        return this.http.get<IContact[]>(this.contactUrl).pipe(
            tap(data => console.log('ALL: ' + JSON.stringify(data))),
            catchError(this.handleError)
        );
    }

    private handleError(err: HttpErrorResponse) {
        let errorMessage = '';
        if (err.error instanceof ErrorEvent){
            errorMessage = `An error occured: ${err.error.message}`;
        } else {
            errorMessage = `Server returned coded ${err.status}, error message is: ${err.message}`;
        }
        console.log(errorMessage);
        return throwError(errorMessage);
        
    }
}