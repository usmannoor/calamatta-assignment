import { TestBed } from '@angular/core/testing';
import { HttpReqInterceptor } from './http-interceptor.service';


describe('HttpReqInterceptor', () => {
  let service: HttpReqInterceptor;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        HttpReqInterceptor
      ]
    });
    service = TestBed.inject(HttpReqInterceptor);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
