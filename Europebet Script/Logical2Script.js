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