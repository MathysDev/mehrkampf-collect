import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LaufzettelComponent } from './laufzettel.component';

describe('LaufzettelComponent', () => {
  let component: LaufzettelComponent;
  let fixture: ComponentFixture<LaufzettelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LaufzettelComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LaufzettelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
