import { Component, AfterViewInit, ElementRef, ViewChild } from '@angular/core';

export class DirectivesModule {}

@Component({
  selector: 'app-home',
  templateUrl: 'math.page.html',
  styleUrls: ['math.page.scss'],
})

export class MathPage {
  
  q1 = String.raw`Suppose $a,b,c \in \mathbb{R}$ so that $a+b+c=1$, $a,b,c \geq 0$. Show $ab+ac+bc \leq \frac{1}{3}$. `;
  
  constructor() {}

  ionViewDidEnter() {
    eval('MathJax.Hub.Queue(["Typeset", MathJax.Hub])');
  }
}
