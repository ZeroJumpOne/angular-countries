import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Country } from '../interfaces/country2';


@Injectable({
   providedIn: 'root'
})
export class Countries2Service {

   private apiUrl: string = 'https://restfulcountries.com/api/v1';
   private apiKey: string = '1042|XaF7N3lUg3fJh5XFv23Pp3NKwx99FtiNz3s6ca2G';



   constructor(private http: HttpClient) { }

   searchCapital( cual: string ): Observable<Country> {

      const headers = { "Authorization": "Bearer 1042|XaF7N3lUg3fJh5XFv23Pp3NKwx99FtiNz3s6ca2G" };
      return this.http.get<Country>(`https://restfulcountries.com/api/v1/countries${cual}`, { headers });
      // https://restfulcountries.com/api/v1/countries/Mexico/presidents
   }

}
