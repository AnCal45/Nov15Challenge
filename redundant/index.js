function redundant(str){
    function func(){
      console.log(str);
    }
    return func();
  }
  
const str = redundant("apple");
const str1 = redundant("pear");
const str2 = redundant("");