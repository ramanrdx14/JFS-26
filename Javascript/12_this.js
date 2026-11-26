//this :: who called you !!

// types of context :

// 1. window/global
// 2. function

console.log(this); // It will print window beacuse it is called by JS engine

// Function

function f1() {
  console.log(this); // who called you JS engine left part of the caller so nothing is there then global conext
}
f1();

// inside method :

let obj = {
  myfunc: function () {
    // who called me ==> obj so this will be current object.
    console.log(this);
  },
};

obj.myfunc();

// function inside method es-5

let obj2 = {
  myfunc: function () {
    function mychild() {
      console.log(this);
    }
    mychild();
  },
};

obj2.myfunc();

// function inside method es-6

let obj3 = {
  myfunc: function () {
    const mychild = () => {
      console.log(this);
    };
    mychild();
  },
};

obj2.myfunc();

// constructor function this value

function f1() {
  console.log(this);
}

const ans = new f1();

// Call Apply Bind function ko call karne ka tarika hai kisi object ko this man kar

// 1. Call()
function demo(a, b, c) {
  console.log(this, a, b, c);
}

demo(1, 2, 3); // agar direct call kre to this global/window hoga

demo.call({ name: "raman" }, 1, 2, 3); // call() ka use kre to this ka value jo object pass karenge wo hoga

// 2. Apply()  Same hai call jaisa but paramaters [] array mai pass hoga
demo.apply({ name: "raman" }, [1, 2, 3]); // apply() ka use kre to this ka value jo object pass karenge wo hoga

// 3. Bind() Same hai call() jaisa but wo function directly call ni krega ek 'function return krta hai'

const ekfunctionreturnkrega = demo.bind({ name: "raman" }, 1, 2, 3);
ekfunctionreturnkrega();
