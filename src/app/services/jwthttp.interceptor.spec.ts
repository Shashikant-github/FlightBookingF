import { TestBed } from '@angular/core/testing';

import { JWTHttpInterceptor } from './jwthttp.interceptor';

describe('JWTHttpInterceptor', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      JWTHttpInterceptor
      ]
  }));

  it('should be created', () => {
    const interceptor: JWTHttpInterceptor = TestBed.inject(JWTHttpInterceptor);
    expect(interceptor).toBeTruthy();
  });
});
