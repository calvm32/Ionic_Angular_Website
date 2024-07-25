import { ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';
import { ConstPage } from './const.page';

describe('ConstPage', () => {
  let component: ConstPage;
  let fixture: ComponentFixture<ConstPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ConstPage],
      imports: [IonicModule.forRoot(), ExploreContainerComponentModule],
    }).compileComponents();

    fixture = TestBed.createComponent(ConstPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
