import { ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { SafetyPage } from './safety.page';

describe('SafetyPage', () => {
  let component: SafetyPage;
  let fixture: ComponentFixture<SafetyPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SafetyPage],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SafetyPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
