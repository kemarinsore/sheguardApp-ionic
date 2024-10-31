import { ComponentFixture, TestBed } from '@angular/core/testing';
import { VerifikasiEmailPage } from './verifikasi-email.page';

describe('VerifikasiEmailPage', () => {
  let component: VerifikasiEmailPage;
  let fixture: ComponentFixture<VerifikasiEmailPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(VerifikasiEmailPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
