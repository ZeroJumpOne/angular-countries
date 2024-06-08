import { Component, OnInit } from '@angular/core';
import { CountriesService } from '../../services/countries.service';
import { Country } from '../../interfaces/country';

@Component({
  selector: 'app-by-country-page',
  templateUrl: './by-country-page.component.html',
  styles: ``
})
export class ByCountryPageComponent implements OnInit{

   public countries: Country[] = [];
   public isLoading: boolean = false;
   public initalValue: string = '';

   constructor(private countriesServices: CountriesService) {}

   ngOnInit(): void {

      this.initalValue = this.countriesServices.cacheStore.byCountry.term;
      this.countries   = this.countriesServices.cacheStore.byCountry.countries;

   }


   searchByCountry( dato: string ) {
      console.log('ByCountry');
      console.log(dato);

      this.countriesServices.searchCountry( dato ).subscribe( countries => {

         this.isLoading = true;

         console.log('ByCountrySuscribe');
         console.log(countries);

         this.countries = countries;

         this.isLoading = false;

      });

   }





}
