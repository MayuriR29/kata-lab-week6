myFunction=require("./getMiddleCharacter");
test("test case 1",()=>{
    input1="test"
    expect(myFunction(input1)).toBe('es');
});
module.exports=myFunction