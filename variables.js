// Var - Not recommended for use in new code
// Use let or const instead

var x = 10;

function testVar(){
    var x = 20;
}

console.log(x); // 10
// console.log(y) // ReferenceError: y is not defined

var browser = "Chrome";
var browser = "Firefox"; // Re-declaring a variable with var is allowed
browser = "Safari"; // Re-assigning a variable is allowed
console.log(browser); // Safari



// Let - Block scoped, cannot be re-declared in the same scope
let a = 30;
function testLet() {
    let a = 40;
    console.log(a); // 40
}
testLet();
console.log(a); // 30


// Const - Block scoped, cannot be re-declared or re-assigned
const weeks = 7;

function getPayment(rate){
    console.log(weeks*rate);
}

getPayment(30); // 700

const days = 30
function getSalary(rate){
    return days * rate;
}

console.log(getSalary(100)); // 3000


