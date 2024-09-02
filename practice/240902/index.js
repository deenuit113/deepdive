let num1 = 1;
const num2 = 2;
var str1 = "this is string1";
let boolean1 = true;
const array1 = ['arr1', 'arr2'];
const object1 = {
    att1: 'val1',
    att2: 'val2'
}

console.log("num1 타입:", typeof num1); // number
console.log("str1 타입:", typeof str1); // string
console.log("boolean1 타입:", typeof boolean1); // boolean
console.log("array1 타입:", typeof array1); // object
console.log("array1 타입:", Array.isArray(array1)); //true
console.log("object1 타입:", typeof object1); // object

let sum = num1 + num2;
let difference = num2 - num1;
let product = num1 * num2;
let quotient = num2 / num1;
let remainder = num2 % num1;
let square = num1 ** num2;

console.log("sum:", sum); //3
console.log("difference:", difference) //1
console.log("product:", product); //2
console.log("quotient:", quotient); //2
console.log("remainder:", remainder); //0
console.log("square:", square); //1

console.log("num1 === num2:", num1 == num2); // false
console.log("num1 !== num2:", num1 != num2); // true
console.log("num1 > num2:", num1 > num2); // false
console.log("num1 < num2:", num1 < num2); // true
console.log("num1 >= num2:", num1 >= num2); // false
console.log("num1 <= num2:", num1 <= num2); // true

let andResult = boolean1 && (num1 < num2);
let orResult = boolean1 || (num1 > num2);
let notResult = !boolean1;

console.log("andResult:", andResult); // true
console.log("orResult:", orResult); // true
console.log("notResult:", notResult); // false

const str2 = "this is string2"
let str1str2 = str1 + str2;
console.log(str1str2); // this is string1this is string2

let count = 0;
count++;
console.log("++", count); // 1
count--;
console.log("--", count); // 0