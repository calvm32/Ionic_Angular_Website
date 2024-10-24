import { ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';
import { GaloisTheoryPage } from './galois-theory.page';

describe('HomePage', () => {
  let component: GaloisTheoryPage;
  let fixture: ComponentFixture<GaloisTheoryPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [GaloisTheoryPage],
      imports: [IonicModule.forRoot(), ExploreContainerComponentModule],
    }).compileComponents();

    fixture = TestBed.createComponent(GaloisTheoryPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
