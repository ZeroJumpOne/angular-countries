import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of, map } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { Country } from '../interfaces/country';
import { CacheStore } from '../interfaces/cache-store.interface';

@Injectable({
   providedIn: 'root'
})
export class CountriesService {

   private apiUrl: string = 'https://restcountries.com/v3.1';
   public cacheStore: CacheStore = {
      byCapital: { term: '', countries: [] },
      byCountry: { term: '', countries: [] },
      byRegion:  { term: '', countries: [] }
   }


   constructor(private http: HttpClient) {
      this.loadFromLocalStorage();
   }

   private saveToLocalStorage(): void {

      localStorage.setItem('cacheStore', JSON.stringify(this.cacheStore));

   }

   private loadFromLocalStorage(): void {

      if (!localStorage.getItem('cacheStore')) return;

      this.cacheStore = JSON.parse( localStorage.getItem('cacheStore')! );

   }

   searchCountryByAlphaCode(cual: string): Observable<Country | null> {

      const url = `${this.apiUrl}/alpha/${cual}`;

      return this.http.get<Country[]>(url)
         .pipe(
            map(countries => countries.length > 0 ? countries[0] : null),

            catchError(error => {
               console.log(error);

               return of(null);
            })
         );

   }

   searchCapital(cual: string): Observable<Country[]> {

      const url = `${this.apiUrl}/capital/${cual}`;

      return this.getCountriesRequest(url)
         .pipe(
            tap( countries => this.cacheStore.byCapital = {term: cual, countries}),
            tap( () => this.saveToLocalStorage())
         );
      // return this.http.get<Country[]>(url)
      //    .pipe(
      //       catchError(error => {
      //          console.log(error);

      //          return of([]);
      //       })
      //    );
   }

   searchCountry(cual: string): Observable<Country[]> {

      const url = `${this.apiUrl}/name/${cual}`;

      return this.getCountriesRequest(url)
         .pipe(
            tap( countries => this.cacheStore.byCountry = {term: cual, countries}),
            tap( () => this.saveToLocalStorage())
         );

      // return this.http.get<Country[]>(url)
      //    .pipe(
      //       catchError(error => {
      //          console.log(error);

      //          return of([]);
      //       })
      //    );
   }

   searchRegion(cual: string): Observable<Country[]> {

      const url = `${this.apiUrl}/region/${cual}`;

      return this.getCountriesRequest(url)
         .pipe(
            tap( countries => this.cacheStore.byRegion = {term:cual, countries}),
            tap( () => this.saveToLocalStorage())
         );

      // return this.http.get<Country[]>(url)
      //    .pipe(
      //       catchError(error => {
      //          console.log(error);

      //          return of([]);
      //       })
      //    );
   }


   private getCountriesRequest(url: string): Observable<Country[]> {

      return this.http.get<Country[]>(url)
         .pipe(
            catchError(() => of([])),
            // delay(1000),
         );

   }
   // Dry = Don Repeat Yourself
   // searchCountries(path: string, cual: string): Observable<Country[]> {

   //    const url = `${this.apiUrl}/${path}/${cual}`;
   //    return this.http.get<Country[]>(url)
   //       .pipe(
   //          catchError(error => {
   //             console.log(error);

   //             return of([]);
   //          })
   //       );

   // }
}
