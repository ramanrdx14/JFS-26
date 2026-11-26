var person = {
  name: "raman",
  age: 21,
  country: "india",
  intro: function () {
    console.log("Intro...");
  },
};

for (var keys in person) {
  if (typeof person[keys] === "function") {
    console.log(person[keys]());
  } else {
    console.log(person[keys]);
  }
}

// Finding all keys

var keys = Object.keys(person);
console.log("Keys ", keys);

// Finding all values
var values = Object.values(person);
console.log("Values ", values);

// Finding all the enteries
var entry = Object.entries(person);
console.log(entry);

// check weather object has a key or not
var b = Object.hasOwn(person, "age"); // true
console.log(b);
b = Object.hasOwn(person, "age1"); // false
console.log(b);

//Object Destructure

var { name, age } = person;
console.log("Name :", name);
console.log("Age  :", age);

// to delete object
delete person.intro;

console.log(person);
