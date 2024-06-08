import { Component, OnInit } from '@angular/core';
import { Country } from '../../interfaces/country';
import { CountriesService } from '../../services/countries.service';

@Component({
  selector: 'app-by-region-page',
  templateUrl: './by-region-page.component.html',
  styles: ``
})
export class ByRegionPageComponent implements OnInit {

   public countries: Country[] = [];
   public isLoading: boolean = false;
   public regions: string[] = ['Africa','Americas','Asia','Europe','Oceania'];
   public selectedRegion: string = '';

   constructor(private countriesService: CountriesService) {}

   ngOnInit(): void {

      this.selectedRegion = this.countriesService.cacheStore.byRegion.term;
      this.countries      = this.countriesService.cacheStore.byRegion.countries;

   }

   searchByRegion( dato: string ): void {

      this.isLoading = true;

      this.selectedRegion = dato;

      console.log('ByRegion');
      console.log(dato);

      this.countriesService.searchRegion( dato ).subscribe( countries => {

         console.log('ByRegionSuscribe');
         console.log(countries);

         this.countries = countries;

         this.isLoading = false;

      });
   }

}
