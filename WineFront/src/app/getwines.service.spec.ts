import { TestBed } from '@angular/core/testing';

import { GetwinesService } from './getwines.service';




describe('GetwinesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GetwinesService = TestBed.get(GetwinesService);
    expect(service).toBeTruthy();
  });
});
