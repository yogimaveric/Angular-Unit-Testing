import { StrengthPipe } from './strength.pipe';

describe('StrengthPipe', () => {
  it('create an instance', () => {
    const pipe = new StrengthPipe();
    expect(pipe).toBeTruthy();
  });

  it('should display if value is less than 10 as weak',()=>{
    const pipe = new StrengthPipe();
    expect(pipe.transform(9)).toEqual('9(weak)');
  });

  it('should display if value is greater than 10 and lesser than 20 as strong',()=>{
    const pipe = new StrengthPipe();
    expect(pipe.transform(10)).toEqual('10(Strong)');
  });

  it('should display if value is greater than 20 and less than 20 as strongest',()=>{
    const pipe = new StrengthPipe();
    expect(pipe.transform(29)).toEqual('29(Strongest)');
  });

});
