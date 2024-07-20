import { ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';

import { TraditionalPage } from './traditional.page';

describe('HomePage', () => {
  let component: TraditionalPage;
  let fixture: ComponentFixture<TraditionalPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TraditionalPage],
      imports: [IonicModule.forRoot(), ExploreContainerComponentModule],
    }).compileComponents();

    fixture = TestBed.createComponent(TraditionalPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
