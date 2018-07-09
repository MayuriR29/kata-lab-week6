const getMiddleCharacter= s=>{
    let firstIndex;
    if (s.length % 2 === 1) { // odd
      firstIndex = Math.floor(s.length/2);
      return s[firstIndex];
    } 
      firstIndex = s.length/2 -1;
      return s[firstIndex] + s[firstIndex + 1];   
}
module.exports=getMiddleCharacter;
