// setTimeout : iska code kuchh der ke bad chalta hai
/*
console.log("Hey-1");
console.log("Hey-2");
setTimeout(() => {
  console.log("Hey-3");
}, 2000);
console.log("Hey-4");

*/

// setInterval ka code kuch der ke bad chalta hai and bar-bar chalta hai

/*


let counter = 0;
const si = setInterval(() => {
  console.log("set interval -- ", counter++);
  if (counter == 3) clearInterval(si);
}, 2000);


*/

// kyuki ye internet par jaayega aur fir data ko lekar aayega to ismein time
// lagta hai to by default hi js mein fetch ko async banaaya gaya hai kyuki fetch
// ka kaam hai data laana wo bhi kisi url se ab aisa ho skta hai us url ki
// website slow ho, to data laane mein time lage aur agar fetch synchronous hota
// to uske baad ka code tab tak nahi chalta jab tak uska data nahi aajata, which
// is a big problem, poora code atak sakta tha
fetch("https://catfact.ninja/fact")
  .then((raw) => raw.json())
  .then((readeable) => console.log(readeable.fact));
