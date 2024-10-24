import { ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';
import { ResearchPage } from './research.page';

describe('ResearchPage', () => {
  let component: ResearchPage;
  let fixture: ComponentFixture<ResearchPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ResearchPage],
      imports: [IonicModule.forRoot(), ExploreContainerComponentModule],
    }).compileComponents();

    fixture = TestBed.createComponent(ResearchPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
