import { TestBed } from '@angular/core/testing';
import { CalculatorService } from './calculator.service';
import { LoggerService } from '../../service/Logger/logger.service';

describe('CalculatorService', () => {
  let service: CalculatorService;
  let loggerService : any;

  //beforeEach will be called before executing each indivdial test cases here beforeEach will call 3 times

  beforeEach(() => {
    //loggerservice needed to call only once in testing we need to know weather its called or not.
    //need to use spyon looger service
    //spyOn which takes instance of loggerSerivce and takse function as parameter
    //if want to spyon logger serivce log method to call both in spy add "and.callThrough()"
    console.log("calling before each test cases");
    loggerService = jasmine.createSpyObj('LoggerService', ['log']);
    service = new CalculatorService(loggerService);
  });

  xit('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should add two number',()=>{
    let result = service.add(5,6);
    expect(result).toBe(11);
    expect(loggerService.log).toHaveBeenCalledTimes(1)
  });

  it('should subtract two number',()=>{
    let result = service.subtract(10,6);
    expect(result).toBe(4);
    expect(loggerService.log).toHaveBeenCalledTimes(1);
  });

  
  

})
