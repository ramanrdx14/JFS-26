var str = "abc";
var newstring = str + "123"; // concatination
console.log(newstring);
newstring = newstring.concat("def"); // concatination
console.log(newstring);

// String templates

var sirname = "raman";
console.log(`Hello my name is ${sirname}`);

// String common methods
var str = "abcdef";
console.log(str.length);
console.log(str.toUpperCase());
console.log(str.toLocaleLowerCase());
console.log(str.charAt(0));
console.log(str.indexOf("a"));
console.log(str.indexOf("Z")); // if not present then -1
console.log("abcdef.123.345".split(".")); // splitting the string

//replacing & substring
var a = "hello world";
console.log(a.substring(0, 5));
a = a.replace("h", "z");
console.log(a);
