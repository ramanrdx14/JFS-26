// agar mere ko koi method chaiye jo ki common ko between 2-or more objects then hum log prototype inheritance
// use kar sakete hai

function makeMyHuman(name, age) {
  this.name = name;
  this.age = age;
}

makeMyHuman.prototype.canWalk = function canWalk() {
  console.log(this.name, " Can Walk !!");
};
const human1 = new makeMyHuman("human1", 23);
const human2 = new makeMyHuman("human2", 25);

console.log(human1.canWalk());
console.log(human2.canWalk());
