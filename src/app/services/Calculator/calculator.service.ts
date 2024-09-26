import { Injectable } from '@angular/core';
import { LoggerService } from '../../service/Logger/logger.service';

@Injectable({
  providedIn: 'root'
})
 

export class CalculatorService {

  constructor(private loggerService:LoggerService){}
  
  person=[{'name':'xyz'},{'name':'abc'}];

  add(n1:number,n2:number){
    let result = n1 + n2;
    this.loggerService.log('Addtion method is called');
    return result;
  }

  subtract(n1:number,n2:number){
    let result = n1 - n2;
    this.loggerService.log('Subtract method is called');
    return result;
  }

  
}
