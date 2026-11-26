/*

Var : It is function scope when it is defined inside the function 
    : It is global scope when it is defiend outside the function
    : It can be re-declared & re-initialize


let : It is block scope.
    : It cannot be re-declared.


const:  It is block scope.
     :  It cannot be re-declared & re-assigned.

*/

var a = 10;
let x = 20;
const pi = 3.14;
function func() {
  console.log("Acessing A because it is var :: ", a);
  console.log("Acessing X because it is let :: ", x);

  x = 999; // Reassigning x becaust it is let
  console.log("Acessing X because it is let (Re-assign):: ", x);
}

console.log("Acessing A because it is var :: ", a);
pi = 37.13; // Not Possible because it is cont
console.log(pi);

func();

// Var, Let , Const are hoistied but (Let & Const cannot be accessed before initialization)
