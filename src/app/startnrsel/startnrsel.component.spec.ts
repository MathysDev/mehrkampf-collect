import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StartnrselComponent } from './startnrsel.component';

describe('StartnrselComponent', () => {
  let component: StartnrselComponent;
  let fixture: ComponentFixture<StartnrselComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StartnrselComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StartnrselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
