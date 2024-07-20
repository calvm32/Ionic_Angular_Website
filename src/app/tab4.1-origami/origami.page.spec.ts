import { ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';

import { OrigamiPage } from './origami.page';

describe('HomePage', () => {
  let component: OrigamiPage;
  let fixture: ComponentFixture<OrigamiPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [OrigamiPage],
      imports: [IonicModule.forRoot(), ExploreContainerComponentModule],
    }).compileComponents();

    fixture = TestBed.createComponent(OrigamiPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
