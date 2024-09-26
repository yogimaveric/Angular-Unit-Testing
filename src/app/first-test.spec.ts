describe('First Test',()=>{
    let testVariable:any;
    
    //before each test case assing test variable as empty object
    beforeEach(()=>{
        testVariable={}
    });

    //first test case

    it('Should return true if a is true',()=>{
        //arrange data
        testVariable.a = false;

        //function or logic 
        testVariable.a = true;

        //assert
        expect(testVariable.a).toBe(true);
    })
})