import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { CountriesService } from '../../services/countries.service';
import { Country } from '../../interfaces/country';
import { switchMap } from 'rxjs';

@Component({
   selector: 'app-country-page',
   templateUrl: './country-page.component.html',
   styles: ``
})
export class CountryPageComponent implements OnInit {

   public country?: Country;

   constructor(
      private activatedRoute: ActivatedRoute,
      private router: Router,
      private countriesService: CountriesService) {}

   ngOnInit(): void {

      this.activatedRoute.params
         .pipe(           /* desestructura params */
            switchMap( ({ id }) => this.countriesService.searchCountryByAlphaCode( id ))
         )
         .subscribe( country => {
            console.log({country});
            if(!country) {
               return this.router.navigateByUrl('');
            }

            // console.log('Tenemos un país');
            return this.country = country;
         });
   }

}
