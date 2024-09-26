import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angular-unit-testing';
  addTwoValues(a:number,b:number){
    let c:number;
    c=a + b;
    console.log(" total calculated value is " + c);
    return c;
  }
  ngoninit(){
    this.addTwoValues(5,6);
  }
}
