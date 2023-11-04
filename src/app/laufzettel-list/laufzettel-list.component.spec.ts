import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LaufzettelListComponent } from './laufzettel-list.component';

describe('LaufzettelListComponent', () => {
  let component: LaufzettelListComponent;
  let fixture: ComponentFixture<LaufzettelListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LaufzettelListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LaufzettelListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
