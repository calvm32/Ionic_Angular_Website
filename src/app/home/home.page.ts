import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  constructor() {
    console.log('Hello world');
    var num1: number = 23;
    var num2: number = 54.239;

    console.log(num1 * num2);
    console.log(num1 - num2);
  }
}
