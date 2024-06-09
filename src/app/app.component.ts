import { DOCUMENT } from '@angular/common';
import { Component } from '@angular/core';
import { Renderer2, Inject } from '@angular/core';
import { register } from 'swiper/element/bundle';

register();
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  constructor(
    private renderer2: Renderer2,
    @Inject(DOCUMENT) private document: Document,
  ) {}

  ngOnInit() {}
}
