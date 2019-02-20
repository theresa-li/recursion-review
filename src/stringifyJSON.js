// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) {
  // your code goes here
  var results = '';
  
  if (typeof obj === "number") {
    results += obj;
  }
  if (obj === null) {
    results += null;
  }
  
  if (Array.isArray(obj) && obj.length === 0) {
    results = '[]';
  }
  
  // if (typeof obj === "boolean" ) {}
  
  if (typeof obj === 'array') {
    
  }
  
  
  return results;
};
