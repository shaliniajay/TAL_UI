import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Occupation, OccupationFactor } from '../models/occupation-factor';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { environment } from '../../environments/environment';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
  })
};


@Injectable({
  providedIn: 'root'
})
export class TalServiceService {

  constructor(private readonly httpClient: HttpClient) { }

  private endpointPrefix = environment.API_URL_PREFIX;

  getAllOccupations(): Observable<any> {
    return this.httpClient.get<any>(`${this.endpointPrefix}/tal/GetOccupations`).pipe(
      catchError((error: any) => {
        return throwError(error);
      })
    );
  }

  getAllOccupationFactors(): Observable<any> {
    return this.httpClient.get<any>(`${this.endpointPrefix}/tal/GetOccupationFactors`).pipe(
      catchError((error: any) => {
        return throwError(error);
      })
    );
  }

}
