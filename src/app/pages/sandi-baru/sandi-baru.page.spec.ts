import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SandiBaruPage } from './sandi-baru.page';

describe('SandiBaruPage', () => {
  let component: SandiBaruPage;
  let fixture: ComponentFixture<SandiBaruPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(SandiBaruPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
