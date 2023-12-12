import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { ITasation } from '../interfaces/tasation.interface';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private _http = inject(HttpClient)
  private urlBase = 'http://localhost:3000/api/v1'

  welcomeAPI(): Observable<any> {
    return this._http.get(this.urlBase)
  }

  transformFileCSV(file: FormData): Observable<ITasation[]> {
    return this._http.post<ITasation[]>(`${this.urlBase}/upload-file`, file)
  }
}
