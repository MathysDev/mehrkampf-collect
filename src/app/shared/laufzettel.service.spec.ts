import { TestBed } from '@angular/core/testing';

import { LaufzettelService } from './laufzettel.service';

describe('LaufzettelService', () => {
  let service: LaufzettelService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LaufzettelService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
