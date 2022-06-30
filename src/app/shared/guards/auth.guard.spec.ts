/* tslint:disable:no-unused-variable */
import { inject, TestBed } from '@angular/core/testing';

import { AuthGuardService } from './auth.guard';


describe('Service: AuthGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AuthGuardService]
    });
  });

  it('should ...', inject([AuthGuardService], (service: AuthGuardService) => {
    expect(service).toBeTruthy();
  }));
});
