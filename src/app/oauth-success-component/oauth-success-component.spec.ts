import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OAuthSuccessComponent } from './oauth-success-component';

describe('OAuthSuccessComponent', () => {
  let component: OAuthSuccessComponent;
  let fixture: ComponentFixture<OAuthSuccessComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OAuthSuccessComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OAuthSuccessComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
