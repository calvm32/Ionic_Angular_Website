import { Component } from '@angular/core';
import { SwiperContainer, register } from 'swiper/element/bundle';
register();

@Component({
  selector: 'app-home',
  templateUrl: 'projects.page.html',
  styleUrls: ['projects.page.scss'],
})
export class ProjectsPage {

  q1 = String.raw`Suppose $a,b,c \in \mathbb{R}$ so that $a+b+c=1$, $a,b,c \geq 0$. Show $ab+ac+bc \leq \frac{1}{3}$. `;
  
  constructor() {}

  ionViewDidEnter() {
    eval('ResearchJax.Hub.Queue(["Typeset", ResearchJax.Hub])');
  }

  ionViewWillEnter() {
    const params = {
      navigation: true,
      pagination: true,
      injectStyles: [
        `
          .swiper-button-next,
          .swiper-button-prev {
            // background-color: white;
            // padding: 8px 16px;
            // border-radius: 100%;
            // border: 2px solid black;
            width: 8px;
            color: black;
          }
          .swiper-pagination-bullet{
            width: 8px;
            height: 8px;
            background-color: black;
          }
      `,
      ],
    };

    for (var i: number = 1; i < 12; i++) {
      var swiperRef: SwiperContainer | null = document.querySelector(
        'swiper-container#container' + i,
      );

      if (swiperRef) {
        Object.assign(swiperRef, params);
        swiperRef?.initialize();
        console.log('not null');
      } else {
        console.log('null');
      }
    }
  }
}
