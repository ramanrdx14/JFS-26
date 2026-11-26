var arr = new Array(1, 2, 3, 4, 5);

console.log(arr);

// find length of array
console.log("Length " + arr.length);

// add elements in array in last
arr.push(6);
console.log(arr);

// add elements in array in front
arr.unshift(0);

console.log(arr);

// remove elements in array from last

arr.pop();

console.log(arr);

// remove elements in array from front

arr.shift();

console.log(arr);

// finding the index of the element
var index = arr.indexOf(5);
console.log(index);

// finding if the element exist  which return true & false
var b = arr.includes("5");
console.log(b);

// reverse a array
arr.reverse();
console.log(arr);

// concat 2 arrays.
var arr1 = [15, 16, 17];
var arr2 = [18, 19, 20];

var ans = arr1.concat(arr2);
console.log(ans);

// we can use this same using spread operator
// spread operator mai array ko khol diya jata hai
var spreadans = [...arr1, ...arr2];
console.log(spreadans);

//subarray find karne ke liye it support -ve value also that means from back side
var subarray = arr.slice(1, 3);
console.log(subarray);

// Destructuring of array

var a1 = [100, 200, 300];

[a, b, c] = a1;
console.log("a ", a);
console.log("b ", b);
console.log("c ", c);

[a, ...b] = a1; // 100 will go to a and rest all the elemnts will combine and go to b as a LIST
console.log("a-", a);
console.log("b-", b);

// removing elements which start from zero using splice (3rd-arg is used for insert element)
var test = [400, 500, 600, 700];
test.splice(1, 1);
console.log(test);
