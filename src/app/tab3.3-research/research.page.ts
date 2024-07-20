import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'research.page.html',
  styleUrls: ['research.page.scss'],
})
export class ResearchPage {
  p6 = String.raw`$p^6$`;
  p5 = String.raw`$p^5$`;
  constructor() {}

  ionViewDidEnter() {
    eval('MathJax.Hub.Queue(["Typeset", MathJax.Hub])');
  }
}
