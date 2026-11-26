// promises kya hai ?

/*
kuchh code socho man mein, jo ki async code ho, matlab ki ye
side stack mein jaayega aur baad mei chalega main stack ke, ab
ye socho ki aapne is code ko likha hai to iska answer kabhi
aayega aur aisa bhi ho sakta hai kis answer naa aaye, promises
kya hai aisa samjho ki aap promise ke andar koi bhi async code
likhdo jo man mein aaye aur promise aapko ek parchi dedeta hai
and wo parchi par by default likha hota hai waiting, parchi par
do events hote hai mainly ek event ka naam hai then aur ek event
ka naam hai catch, agar aapka data aagaya to parchi pe resolved
likhjaayega waiting ki jagah and then chalega aur agar data mein
dikkat aayi to catch chalega and waiting ki jagah rejected
likhjaayega
*/

const parchi = new Promise((resolve, reject) => {
  fetch("https://catfact.ninja/fact")
    .then((raw) => raw.json())
    .then((readeable) => {
      if (readeable.length > 100) resolve(readeable.fact);
      else reject(readeable.fact);
    });
});

parchi
  .then((resp) => {
    console.log("Laal Button :: ", resp);
  })
  .catch((resp) => {
    console.log("Hara Button :: ", resp);
  });

// Same thing using CallBacks :
// callbacks can lead to call-backhell probleam so generally we dont prefer callbacks in long
// chaining code.

function getData(resolveCallBack, rejectCallBack) {
  fetch("https://catfact.ninja/fact")
    .then((raw) => raw.json())
    .then((readeable) => {
      if (readeable.length > 100) resolveCallBack(readeable.fact);
      else rejectCallBack(readeable.fact);
    });
}

const resolveCallBack = (resp) => {
  console.log("Resolve CallBack Executed");
};

const rejectCallBack = (resp) => {
  console.log("Reject CallBack Executed");
};

getData(resolveCallBack, rejectCallBack);

// Async - Await
// With async-await ap async code bhi aise likh sakte ho jaise ki ap normal synchnonous code likh rahe ho
async function asyncfunc() {
  let resp = await fetch("https://catfact.ninja/fact");
  resp = await resp.json();

  console.log(resp, " ASYNC AWAIT ....");
}

asyncfunc();
