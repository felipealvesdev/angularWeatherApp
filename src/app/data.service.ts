import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private apiKey = `456165af1a0e7545d7d46530a7190936`;
  private apiUrl = `https://api.openweathermap.org/data/2.5/`;


  constructor(private http: HttpClient) { }

  public getWeatherData(cityName:string): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/weather?q=${cityName}&appid=${this.apiKey}`);
  }

}
