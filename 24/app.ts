let typescript: string = "TYPESCRIPT";
// • Tests for equality and inequality with strings

console.log('IS TYPESCRIPT IS EQUAL TO Typescript?');
console.log(typescript == "TYPESCRIPT");

console.log('IS TYPESCRIPT IS NOT EQUAL TO Typescript?');
console.log(typescript !== "TYPESCRIPT");

// • Tests using the lower case function

console.log('is  Typescript is equal to Typescript?');
console.log(typescript == 'TYPESCRIPT');

console.log('is typescript is equal to Typescript?');
console.log(typescript.toLowerCase() === 'TYPESCRIPT');

// • Numerical tests

// equality 
let myNum: number = 5;
let urNum: number = 6;
console.log('Is myNum = yourNUm?');
console.log(myNum == urNum);

// inequality
console.log('Is myNum is not equal to yourNUm?');
console.log(myNum !== urNum);

// greater than  
console.log('Is myNum is greater than yourNum?');
console.log(myNum>urNum);
// less than
console.log('Is myNum is less than yourNum?');
console.log(myNum<urNum);

// greater than or equal to
console.log('Is myNum is greater than or equal to yourNum');
console.log(myNum>=urNum);

// less than or equal to
console.log('Is myNum is less than or equal to yourNum');
console.log(myNum<=urNum);

//  Tests using "and" and "or" operators
console.log('Is myNum is less than or equal to yourNum && your num is 7');
console.log(myNum<=urNum && urNum==7);

console.log('Is myNum is less than or equal to yourNum || your num is 7');
console.log(myNum<=urNum || urNum==7);

// • Test whether an item is in a array
let Subjects: string[] = ['Urdu' , 'Eng', 'Math'];
console.log('Does Subjects contains Eng: ' , Subjects.includes("Eng"));
// • Test whether an item is not in a array

console.log('Does Subjects contains Computer: ' , Subjects.includes("Computer"));