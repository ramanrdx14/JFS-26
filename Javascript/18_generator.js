//AP execution ko pause kar-sakete ho and bolsakte ho ki ab agla step kro
// function with '*'

function* myGen() {
  console.log("Started ...");
  yield 1;
  console.log("Dusra chalchuka ...");
  yield 2;
  console.log("Tisra chalchuka ...");
  yield 3;
}

const ans = myGen();

console.log(ans.next().value);
console.log(ans.next().value);
console.log(ans.next().value);
