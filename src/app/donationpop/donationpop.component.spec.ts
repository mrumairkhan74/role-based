import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DonationpopComponent } from './donationpop.component';

describe('DonationpopComponent', () => {
  let component: DonationpopComponent;
  let fixture: ComponentFixture<DonationpopComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DonationpopComponent]
    });
    fixture = TestBed.createComponent(DonationpopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
