import { TestBed } from '@angular/core/testing';
import { User } from '../models/user';

import { UserService } from './user.service';

describe('UserService', () => {
  let service: UserService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UserService);
  });

  


  xit('should be created', () => {
    
    //user.userName
    expect(service).toBeTruthy();
  });
});
