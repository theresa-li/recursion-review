// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) {
  // your code goes here
  var results = '';
  
  if (typeof obj === "number" || typeof obj === "boolean" ) {
    results += obj;
  }
  if (obj === null) {
    return 'null';
  }
  
  // if (Array.isArray(obj) && obj.length === 0) { //[]
  //   results = '[]';
  // }
  
  if (typeof obj === "string" ) {
    results += '"' + obj + '"';
  }
  
  
  if (Array.isArray(obj)) {
    var result = [];
    for (var i = 0; i < obj.length; i++) {
      result.push(stringifyJSON(obj[i]));//[1,2,3]
    }
    return '[' + result + ']'; // 1,2,3
  }
  // if (typeof obj === 'array') {
    
  // }
  if (typeof obj === "object") {
    var theresa = "";
    for (var key in obj) {
      if (obj[key] === undefined) {
        return '{}'
      }
      theresa += ('"' + key + '"' + ":" + stringifyJSON(obj[key]) + ',');
    }
    return '{' + theresa.slice(0, -1) + '}';
  }
  
  
  return results;
};
