import { Directive, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[myFor]'
})
export class ForDirective implements OnInit {

  @Input('myForEm') numbers: number[]=[]

  constructor() {
    console.log('MyFor')
   }

   ngOnInit(): void {

   }

}
