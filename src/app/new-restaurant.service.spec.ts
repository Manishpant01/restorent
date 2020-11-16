import { TestBed } from '@angular/core/testing';

import { NewRestaurantService } from './new-restaurant.service';

describe('NewRestaurantService', () => {
  let service: NewRestaurantService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NewRestaurantService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
