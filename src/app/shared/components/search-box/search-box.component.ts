import { Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { Subject, Subscription, debounceTime } from 'rxjs';

@Component({
   selector: 'shared-search-box',
   templateUrl: './search-box.component.html',
   styles: ``
})
export class SearchBoxComponent implements OnInit, OnDestroy {

   private debouncer: Subject<string> = new Subject<string>();
   private debouncerSuscription?: Subscription;

   @Input()
   public placeholder: string = 'Busqueda por XXX';

   @Input()
   public initialValue: string = '';

   @Output()
   public onValue = new EventEmitter<string>();

   @Output()
   public onDebounce = new EventEmitter<string>();

   ngOnInit(): void {

      this.debouncerSuscription = this.debouncer
         .pipe(
            debounceTime(400)
         )
         .subscribe(valor => {
            // console.log('debounce:');
            // console.log(valor);

            this.onDebounce.emit( valor );

         });

   }

   ngOnDestroy(): void {

      // console.log('se destruye');
      this.debouncerSuscription?.unsubscribe();

   }

   public emitValue(valor: string): void {
      this.onValue.emit(valor);
   }

   public emitDebounce( valor: string): void {
      this.onDebounce.emit( valor );
   }

   public onKeyPress(searchTerm: string): void {

      // console.log(searchTerm);
      this.debouncer.next(searchTerm);


   }



}
