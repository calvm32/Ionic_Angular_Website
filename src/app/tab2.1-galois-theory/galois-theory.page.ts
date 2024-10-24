import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'galois-theory.page.html',
  styleUrls: ['galois-theory.page.scss'],
})
export class GaloisTheoryPage {
  p6 = String.raw`$p^6$`;
  p5 = String.raw`$p^5$`;
  
  constructor() {}

  ionViewDidEnter() {
    eval('MathJax.Hub.Queue(["Typeset", MathJax.Hub])');
  }
}
