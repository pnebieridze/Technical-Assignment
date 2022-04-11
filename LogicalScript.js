// პირველი ამოცანა 

var numJewelsInStones = function(J, S) {
    var count = 0;
    for (var i=0; i<J.length; i++){
          for (var k=0; k<S.length; k++){
              if (J[i].includes(S[k])){
                  count++
              }
          }
      }
      return count;
  };
  
  console.log(numJewelsInStones("xx","XXXXXXXX"))

// მეორე ამოცანა

  var isValid = function(s) {
    let dictionary = {
      "(": ")",
      "{": "}",
      "[": "]",
    };
  
    let arrayFromString = Array.from(s);

    let stk = [];
    while (arrayFromString.length) {
      const firstElement = arrayFromString.shift();
      if (firstElement in dictionary) {
        stk.push(dictionary[firstElement]);
      } else if (firstElement !== stk.pop()) {
        return false;
      }
    }
 
     return stk.length == 0

  }
  
 console.log(isValid("()[]{}"))