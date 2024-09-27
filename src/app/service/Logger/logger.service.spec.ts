import { TestBed } from '@angular/core/testing';

import { LoggerService } from './logger.service';

describe('LoggerService', () => {
  let service: LoggerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LoggerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should have empty message state at starting',()=>{
    expect(service.message.length).toBe(0);
  })

  it('should display message array length to be 1',()=>{
    service.log("abc");
    expect(service.message.length).toBe(1);
  })

  it('should clear message array and length to be 0',()=>{
    service.clear();
    expect(service.message.length).toBe(0);
  })

});
