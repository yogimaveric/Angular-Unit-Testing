import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoggerService {
message:string[]=[];

//in spec file constructor debugger is calling multiple times we kept spyon on log method in calculator.spec.ts
constructor(){
  debugger
}
log(message:string){
  this.message.push(message);
}

clear(){
  this.message=[];
}
}
