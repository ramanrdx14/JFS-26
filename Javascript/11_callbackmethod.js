// For Each : It doesnot return any thing it only prints

let arr = new Array(1, 2, 3, 4, 5);

arr.forEach((value, idx) => {
  console.log("Value :" + value + " Index :" + idx);
});

// Map : It is used to return something for each an every elements of the array.

let doubleArr = arr.map((x) => x * 2);
console.log(doubleArr);

// filter : It is used to return something based on some condition

let evenArr = arr.filter((x) => x % 2 == 0);
console.log(evenArr);

// reduce : It is used to return the single value

let sum = arr.reduce((acc, curr) => acc + curr, 0);
console.log("Sum is :", sum);

// find : it is used to find the value if it finds the value based on some condition it will return the value

let find = arr.find((value) => value >= 4);
console.log(find);

// every : it checks the condition and return ' true ' or ' false ' if it satisfy for all the element.

let isGreater = arr.every((value) => value >= 1);
console.log("Is all the value greater then 1 :", isGreater);

// some : it checks atlest one condition should satusfly and return ' true ' else return  ' false '.

let isAnyValue = arr.some((value) => value > 5);
console.log("Is any value greater then 5 ", isAnyValue);

// sort :
let arr2 = [1, 2, -1, -5, 7, 4, 1, 100];
arr2.sort((a, b) => a - b);
console.log(arr2);
