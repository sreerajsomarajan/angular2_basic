/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { BirthdayService } from './birthday.service';

describe('BirthdayService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BirthdayService]
    });
  });

  it('should ...', inject([BirthdayService], (service: BirthdayService) => {
    expect(service).toBeTruthy();
  }));
});
