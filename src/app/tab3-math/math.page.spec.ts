import { ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';

import { MathPage } from './math.page';

describe('MathPage', () => {
  let component: MathPage;
  let fixture: ComponentFixture<MathPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MathPage],
      imports: [IonicModule.forRoot(), ExploreContainerComponentModule],
    }).compileComponents();

    fixture = TestBed.createComponent(MathPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
