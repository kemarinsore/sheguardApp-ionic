import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PelakuK3Page } from './pelaku-k3.page';

describe('PelakuK3Page', () => {
  let component: PelakuK3Page;
  let fixture: ComponentFixture<PelakuK3Page>;

  beforeEach(() => {
    fixture = TestBed.createComponent(PelakuK3Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
