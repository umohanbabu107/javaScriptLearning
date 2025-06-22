// 1. push -> adds an element to the end of an array and returns the new length of the array
let array = [1,2,3,4,5];
console.log('New length of array: '+array.push(6));
console.log("After push:", array);


// 2. pop -> removes the last element from an array and returns that element
console.log('Poped element: '+array.pop());
console.log("After pop:", array);


// 3. shift -> removes the first element from an array and returns that element
console.log('Shifted element: '+array.shift());
console.log("After shift:", array);


// 4. unshift -> adds one or more elements to the beginning of an array and returns the new length of the array
array.unshift(0,1);
console.log('New length of array after unshift: ' + array.length);
console.log("After unshift:", array);

// 5. splice -> changes the contents of an array by removing or replacing existing elements and/or adding new elements in place
array.splice(2, 1, 'a', 'b'); // removes 1 element
console.log("After splice:", array);

// 6. slice -> returns a shallow copy of a portion of an array into a new array object selected from start to end (end not included)
let slicedArray = array.slice(1, 4); // copies elements from index 1
console.log("Sliced array:", slicedArray);

// 7. concat -> merges two or more arrays and returns a new array
let anotherArray = [7, 8, 9];
let concatenatedArray = array.concat(anotherArray);
console.log("Concatenated array:", concatenatedArray);

// 8. indexOf -> returns the first index at which a given element can be found in the array, or -1 if it is not present
let index = concatenatedArray.indexOf(8);
console.log("Index of 8 in concatenated array:", index);

// 9. includes -> determines whether an array includes a certain value among its entries, returning true or false as appropriate
let includesValue = concatenatedArray.includes(5);
console.log("Does concatenated array include 5?", includesValue);

// 10. forEach -> executes a provided function once for each array element
let programs = ['JavaScript', 'Python', 'Java'];

programs.forEach((program) => {
    console.log("Program:" + program);
});

// 11. every() -> tests whether all elements in the array pass the test implemented by the provided function
let nums = [2, 4, 6, 8, 10, 13];
let allEven = nums.every((e) => e %2 ===0);
console.log("Are all numbers even?", allEven);

// 2. some() -> tests whether at least one element in the array passes the test implemented by the provided function
let someEven = nums.some((e) => e %2 ===0);
console.log("Are some numbers even?", someEven);

// 3. find() -> returns the value of the first element in the array that satisfies the provided testing function. Otherwise, undefined is returned.
let foundEven = nums.find((e) => e % 2 === 0);
console.log("First even number found:", foundEven);

// 4. indexOf() -> returns the first index at which a given element can be found in the array, or -1 if it is not present
let indexOfFive = nums.indexOf(5);
console.log("Index of 5 in nums:", indexOfFive);

// 5. lastIndexOf()
let lastIndexOfFive = nums.lastIndexOf(5);
console.log("Last index of 5 in nums:", lastIndexOfFive);

// 6. reverse() -> reverses the elements of an array in place
let reversedArray = nums.reverse();
console.log("Reversed nums:", reversedArray);

// 7. sort() -> sorts the elements of an array in place and returns the sorted array
let sortedArray = nums.sort((a, b) => a - b); // ascending order
console.log("Sorted nums:", sortedArray);   
let sortedArrayDesc = nums.sort((a, b) => b - a); // descending order
console.log("Sorted nums in descending order:", sortedArrayDesc);


