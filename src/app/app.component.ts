import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
    stars: number[] = [1, 2, 3, 4, 5];
    selectedValue: number;
  
    constructor() { }
    
    ngOnInit() {
    }
    
    countStar(star) {
      this.selectedValue = star;
      console.log('Value of star', star);
    }
}
