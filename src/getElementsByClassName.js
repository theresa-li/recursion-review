// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };
/*
 document.body, element.childNodes, and element.classList

*/
// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className, node) {
  // your code here
  var results = [];
  var bodyHTML = node || document.body;
  
  
  if (bodyHTML.classList && bodyHTML.classList.contains(className)) {
    results.push(bodyHTML);
  }
  
  if (bodyHTML.hasChildNodes()) {
    for (var i = 0; i < bodyHTML.childNodes.length; i++) {
      results = results.concat(getElementsByClassName(className, bodyHTML.childNodes[i]));
    }
  }
  
  // for (var i = 0; i < bodyHTML.childNodes.length; i++) {
  //   if (bodyHTML.childNodes[i].classList) {
  //     for (var j = 0; j < bodyHTML.childNodes[i].classList.length; j++) {
  //       if (bodyHTML.childNodes[i].classList[j] === className) {
  //         results.push(bodyHTML.childNodes[i]);
  //       }
  
  //       if (bodyHTML.childNodes[i].hasChildNodes()) {
  //         // results.push(getElementsByClassName(className, bodyHTML.childNodes[i]));
  //         results = results.concat(getElementsByClassName(className, bodyHTML.childNodes[i]));
  //       }
  //     }
  //   }
  // }
  return results;
};
