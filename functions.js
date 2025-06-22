// Function declartion

function add(a,b){
    return a+b;
}

console.log("Sum of given numbers " + add(2,3));

// Anonymous Function

let multiply = function(a,b) {
    return a * b;
}

console.log("Product of given numbers " + multiply(2,3));

// Arrow Function 

let substract = (a,b) => 
{
    return a - b;
}

console.log("Substraction of given numbers " + substract(5,3));

