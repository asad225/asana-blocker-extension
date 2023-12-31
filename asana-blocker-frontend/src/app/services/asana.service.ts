import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AsanaService {
    constructor(
        private http: HttpClient
    ) {}

    getAsanaAssignee(email: string): Observable<any> {
        return this.http.get<any>(`https://app.asana.com/api/1.0/users/${email}`);
    }
}
