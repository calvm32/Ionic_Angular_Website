import { Component } from '@angular/core';
import { SwiperContainer, register } from 'swiper/element/bundle';
register();

@Component({
  selector: 'app-home',
  templateUrl: 'origami.page.html',
  styleUrls: ['origami.page.scss'],
})
export class OrigamiPage {
  constructor() {}

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
