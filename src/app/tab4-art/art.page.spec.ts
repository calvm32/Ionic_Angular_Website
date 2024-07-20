import { ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';

import { ArtPage } from './art.page';

describe('HomePage', () => {
  let component: ArtPage;
  let fixture: ComponentFixture<ArtPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ArtPage],
      imports: [IonicModule.forRoot(), ExploreContainerComponentModule],
    }).compileComponents();

    fixture = TestBed.createComponent(ArtPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
