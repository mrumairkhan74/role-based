import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DonationliComponent } from './donationli.component';

describe('DonationliComponent', () => {
  let component: DonationliComponent;
  let fixture: ComponentFixture<DonationliComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DonationliComponent]
    });
    fixture = TestBed.createComponent(DonationliComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
