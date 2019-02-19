// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };
/*
     document.body
  childNodes

*/
// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className, node) {
  // your code here
  var results = [];
  var bodyHTML = node || document.body;
  
  
  for (var i = 0; i < bodyHTML.childNodes.length; i++) {
    if (bodyHTML.childNodes[i].className === className) {
      results.push(bodyHTML.childNodes[i]);
    }
  
    if (bodyHTML.childNodes[i].hasChildNodes()) {
      results.push(getElementsByClassName(className, bodyHTML.childNodes[i]));
    }
  }
  return results;
};
