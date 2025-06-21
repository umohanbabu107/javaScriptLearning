// For loop
for(let i=0; i < 5; i++) {
    console.log("For loop iteration:", i);
}

// while loop

let j = 0;
while(j<=5){
    console.log("While loop iteration:", j);
    j++;
}

// do while loop

let k=0;
do{
    console.log('Do while loop iteration:', k);
    k++;
} while(k<=5);

// for...of loop
const array = [1, 2, 3, 4, 5];

console.log(array[0])

for(let m of array){
    console.log("For...of loop value:", m);
}


// for...in loop
const object = {a:1, b:2, c:3};
console.log(object['a'])
for(let value in object){
    console.log("For...in loop key:", value, "Value:", object[value]);
}


const user = {
    name: "John",
    age: 30,
    city: "New York"
}

for(let key in user){
    console.log(`Key: ${key}, Value: ${user[key]}`);
}

