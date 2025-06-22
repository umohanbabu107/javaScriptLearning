// Map
let array = [1, 2, 3, 4, 5];

let doubledArray = array.map((e) => e*2);
console.log(doubledArray); // [2, 4, 6, 8, 10]

let emp = [
    { name: "John", age: 25 , salary: 50000 },
    { name: "Jane", age: 30 , salary: 60000 },
    { name: "Doe", age: 35 , salary: 70000 }
];

let empSalIncremetns = emp.map((e) => 
{
    return {
        name: e.name,
        age: e.age,
        salary: e.salary + e.salary*0.15
    }
});

console.log(empSalIncremetns);


// Filter

let nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let evenNums = nums.filter((e) => 
{
    return e %2 == 0;
});

console.log(evenNums); // [2, 4, 6, 8, 10]


let students = [
    { name: "Alice", age: 20, grade: 85 },
    { name: "Bob", age: 22, grade: 75 },
    { name: "Charlie", age: 21, grade: 90 },
    { name: "David", age: 23, grade: 65 }
];

let meritStudents = students.filter((e) =>
{
    return e.grade >= 80;
});

console.log(meritStudents); // [{ name: "Alice", age: 20, grade: 85 }, { name: "Charlie", age: 21, grade: 90 }]


// Reduce

let numbers = [1, 2, 3, 4, 5];

let sum = numbers.reduce((acc, num) => 
{
    return acc+ num;
}, 0);

console.log(sum); // 15

let productOfNumbers = numbers.reduce((acc, num) => 
{
    return acc * num;
}, 1);

console.log(productOfNumbers); // 120

