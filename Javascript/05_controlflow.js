// Conditions
var age = 18;
if (age >= 18) console.log("aajao");
else if (age >= 80) console.log("apologies");
else console.log("Get lost !!");

// Switch Statement
var day = 6;
switch (day) {
  case 1:
    console.log("Monday");
    break;
  case 2:
    console.log("Tuesday");
    break;
  case 3:
    console.log("Wednesday");
    break;
  case 4:
    console.log("Thursday");
    break;
  case 5:
    console.log("Friday");
    break;
  case 6:
    console.log("Saturday");
    break;
  default:
    console.log("Weekend");
    break;
}

// Find Maximum among 3 values

var a = 3;
var b = 4;
var c = 5;
if (a > b && a > c) {
  console.log(a);
} else if (b > a && b > c) {
  console.log(b);
} else {
  console.log(c);
}

// Loops
// 1. for, while, do-while, for in , do of

var arr = [1, 2, 3, 4, 5];
for (var i = 0; i < arr.length; i++) console.log(arr[i]);

console.log("---------------------------------------------");

var k = 1;
while (k <= 10) console.log(k++);

console.log("---------------------------------------------");

k = 1;

do {
  console.log(k);
  k++;
} while (k <= 10);

console.log("---------------------------------------------");

var obj = { a: 1, b: 2 };
for (var x in obj) console.log(x);
