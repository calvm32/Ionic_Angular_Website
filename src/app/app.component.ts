import { DOCUMENT } from '@angular/common';
import { Component } from '@angular/core';
import { Renderer2, Inject } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})

export class AppComponent {
  constructor(
    private renderer2: Renderer2,
    @Inject(DOCUMENT) private document:Document
    ){
  }    

  ngOnInit() {
    // const s1 = this.renderer2.createElement('script');
    // s1.type = 'text/x-mathjax-config';
    // /*
    // MathJax.Hub.Config({
    //   tex2jax: {
    //       inlineMath: [['$','$'], ['\\(','\\)']],
    //       processEscapes: true
    //       }
    // }); {}
    // */
    // s1.text = ``;
    // this.renderer2.appendChild(this.document.body, s1);
    // const s2 = this.renderer2.createElement('script');
    // s2.type="text/javascript";
    // s2.src="/My-Website/src/assets/MathJax/MathJax.js?config=TeX-MML-AM_HTMLorMML"
    // s2.text = ``;
    // this.renderer2.appendChild(this.document.body, s2);
  }

}
