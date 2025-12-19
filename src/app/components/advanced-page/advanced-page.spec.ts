import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdvancedPage } from './advanced-page';

describe('AdvancedPage', () => {
  let component: AdvancedPage;
  let fixture: ComponentFixture<AdvancedPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdvancedPage]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdvancedPage);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
