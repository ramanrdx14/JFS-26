// Aisa koi function jo kisi function ko return karde and parent ka koi variable usko closure kehte hai

function parent() {
  let a = 10;
  return function child() {
    console.log(a);
  };
}
let ans = parent();
ans();
