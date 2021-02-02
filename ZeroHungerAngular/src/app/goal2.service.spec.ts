import { TestBed } from '@angular/core/testing';

import { Goal2Service } from './goal2.service';

describe('Goal2Service', () => {
  let service: Goal2Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Goal2Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
