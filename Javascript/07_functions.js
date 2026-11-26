function greet(name = " Guest ") {
  console.log("Hello Good Morning", name);
}

greet("Raman");

function calculate(a, b) {
  return a + b;
}

var result = calculate(10, 20);
console.log(result);

// Function Expression

var func = function () {
  console.log("Functional Expression ::");
};

func();

//ES-6 Arrow Function

var hello = () => console.log("Hello");
hello();
