var a = true;
var b = false;

console.log(a == b);

b = true;

console.log(a == b);

b = "true";

console.log(a == b);
console.log(a === b); // strict comparison which means type + content 


