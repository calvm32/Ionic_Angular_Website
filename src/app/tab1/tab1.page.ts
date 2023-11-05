import { Component } from '@angular/core';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  constructor() {
    console.log("Hello world")
    var num1: number = 23
    var num2: number = 54.239

    console.log(num1 * num2);
    console.log(num1 - num2);
  }

}
