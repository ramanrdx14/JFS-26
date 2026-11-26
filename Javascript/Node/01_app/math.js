module.exports.add = function (a, b) {
  return a + b;
};

function multiply(a, b) {
  return a * b;
}

const PI = 3.142;

module.exports = { multiply, PI };

// End mai bhi likh sakte ho no dikkat

// Requiring inbuilt module.
let fs = require("fs");
let katha = fs.readFileSync("./math.js", "utf-8");
console.log(katha);
